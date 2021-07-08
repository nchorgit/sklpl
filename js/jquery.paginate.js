/*
    jquery.page
    ^^^^^^^^^^^^^^^

    Description: Add a pagination to everything.
    Version: Version 0.3.0
    Author: Kevin Eichhorn (https://github.com/neighbordog)
*/

(function( $ ) {

    $.page = function(element, options) {

        /*
            #Defaults
        */
        var defaults = {
            perPage:                5,              //how many items per page
            autoScroll:             false,           //boolean: scroll to top of the container if a user clicks on a pagination link
            scope:                  '',             //which elements to target
            pagePosition:       ['top'],     //defines where the pagination will be displayed
            containerTag:           'div',
            paginationTag:          'div',
            itemTag:                'div',
            linkTag:                'a',
            useHashLocation:        false,           //Determines whether or not the plugin makes use of hash locations
            onPageClick:            function() {}   //Triggered when a pagination link is clicked

        };

        var plugin = this;
        var plugin_index = $('.page').length;

        plugin.settings = {};

        var $element = $(element);

        var curPage, items, offset, maxPage;

        /*
            #Initliazes plugin
        */
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);

            curPage = 1;
            items =  $element.children(plugin.settings.scope);
            maxPage = Math.ceil( items.length / plugin.settings.perPage ); //determines how many pages exist

            var paginationHTML = generatePagination(); //generate HTML for pageination

            if($.inArray('top', plugin.settings.pagePosition) > -1) {
                $element.before(paginationHTML);
            }

            if($.inArray('bottom', plugin.settings.pagePosition) > -1) {
                $element.after(paginationHTML);
            }

            $element.addClass("page");
            $element.addClass("page-" + plugin_index);

            var hash = location.hash.match(/\#page\-(\d)/i);

            //Check if URL has matching location hash
            if(hash && plugin.settings.useHashLocation) {
                plugin.switchPage(hash[1]);
            } else {
                plugin.switchPage(1); //go to initial page
            }

        };

        /*
            #Switch to Page > 'page'
        */
        plugin.switchPage = function(page) {

            if(page == "next") {
                page = curPage + 1;
            }

            if(page == "prev") {
                page = curPage - 1;
            }

            //If page is out of range return false
            if(page < 1 || page > maxPage) {
                return false;
            }

            if(page > maxPage) {
                $('.page-pagination-' + plugin_index).find('.page-next').addClass("deactive");
                return false;
            } else {
                $('.page-pagination-' + plugin_index).find('.page-next').removeClass("deactive");
            }

            $('.page-pagination-' + plugin_index).find('.active').removeClass('active');
            $('.page-pagination-' + plugin_index).find('.page-' + page).addClass('active');

            offset = (page - 1) * plugin.settings.perPage;

            $( items ).hide();

            //Display items of page
            for(i = 0; i < plugin.settings.perPage; i++) {
                if($( items[i + offset] ).length)
                    $( items[i + offset] ).fadeTo(100, 1);
            }

            //Deactive prev button
            if(page == 1) {
                $('.page-pagination-' + plugin_index).find('.page-prev').addClass("deactive");
            } else {
                $('.page-pagination-' + plugin_index).find('.page-prev').removeClass("deactive");
            }

            //Deactive next button
            if(page == maxPage) {
                $('.page-pagination-' + plugin_index).find('.page-next').addClass("deactive");
            } else {
                $('.page-pagination-' + plugin_index).find('.page-next').removeClass("deactive");
            }

            curPage = page;

            return curPage;

        };

        /*
        #Kills plugin
        */
        plugin.kill = function() {

            $( items ).show();
            $('.page-pagination-' + plugin_index).remove();
            $element.removeClass('page');
            $element.removeData('page');

        };

        /*
        #Generates HTML for pagination (nav)
        */
        var generatePagination = function() {

            var paginationEl = '<' + plugin.settings.containerTag + ' class="page-pagination page-pagination-' + plugin_index + '" data-parent="' + plugin_index + '">';
            paginationEl += '<' + plugin.settings.paginationTag + '>';

            paginationEl += '<' + plugin.settings.itemTag + '>';
            paginationEl += '<' + plugin.settings.linkTag + ' href="#" data-page="prev" class="page page-prev">&laquo;</' + plugin.settings.linkTag + '>';
            paginationEl += '</' + plugin.settings.itemTag + '>';

            for(i = 1; i <= maxPage; i++) {
                paginationEl += '<' + plugin.settings.itemTag + '>';
                paginationEl += '<' + plugin.settings.linkTag + ' href="#page-' + i + '" data-page="' + i + '" class="page page-' + i + '">' + i + '</' + plugin.settings.linkTag + '>';
                paginationEl += '</' + plugin.settings.itemTag + '>';
            }

            paginationEl += '<' + plugin.settings.itemTag + '>';
            paginationEl += '<' + plugin.settings.linkTag + ' href="#" data-page="next" class="page page-next">&raquo;</' + plugin.settings.linkTag + '>';
            paginationEl += '</' + plugin.settings.itemTag + '>';

            paginationEl += '</' + plugin.settings.paginationTag + '>';
            paginationEl += '</' + plugin.settings.containerTag + '>';

            //Adds event listener for the buttons
            $(document).on('click', '.page-pagination-' + plugin_index + ' .page', function(e) {
                e.preventDefault();

                var page = $(this).data('page');
                var pageParent = $(this).parents('.page-pagination').data('parent');

                //Call onPageClick callback function
                $('.page-' + pageParent).data('page').settings.onPageClick();

                page = $('.page-' + pageParent).data('page').switchPage(page);

                if(page) {
                    if(plugin.settings.useHashLocation)
                        location.hash = '#page-' + page; //set location hash

                    if(plugin.settings.autoScroll)
                        $('html, body').animate({scrollTop: $('.page-' + pageParent).offset().top}, 'slow');

                }

            });

            return paginationEl;

        };

        plugin.init();

    };

    $.fn.page = function(options) {

        return this.each(function() {
            if (undefined === $(this).data('page')) {
                var plugin = new $.page(this, options);
                    $(this).data('page', plugin);
            }
        });

    };

}( jQuery ));