const createHeader = () => {
    let header = document.querySelector('.header');

    header.innerHTML = `
    <!DOCTYPE html>
    <html lang="el">
    <head>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Roboto:300,400,700|Roboto+Slab:300,400,700|&subset=greek' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i&subset=greek,greek-ext' rel='stylesheet' />
        
        <link href='https://fonts.googleapis.com/css?family=Google+Sans:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i' rel='stylesheet' />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' />
        <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
        <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <title>Σκλαβενίτης:Τα προϊόντα Ιδιωτικής Ετικέτας</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      
        <link href="/all.css" rel="stylesheet" type="text/css">
        
        <link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all">
        <link href='https://sites.google.com/site/sklplfiles/files/sklico.png' rel='shortcut icon' />
    </head>
    <body>
        <div class="header">
            <div class="topnav">
                <div id="mlines"><a href="#">
                        <div style="width: 20px; height: 2px; background-color: white; position:absolute; left:0px; right:0px; top: 13px;margin:auto;"></div>
                        <div style="width: 20px; height: 2px; background-color: white; position:absolute; left:0px; right:0px; top: 0px; bottom: 0px; margin:auto;"></div>
                        <div style="width: 20px; height: 2px; background-color: white; position:absolute; left:0px; right:0px; bottom:13px; margin:auto;"></div>
                    </a></div>
                <div class="logopl">
                    <a href="/index.html"></a>
                </div>
                <div class="labels"><a href="/pages/labels/marata/marata.html"><i class="fas fa-tags"></i><b>Ετικέτες</b></a></div>
                <div class="cats"><a href="/pages/labels/sklavenitis/sklavenitis.html"><i class="far fa-clone"></i><b>Κατηγορίες</b></a></div>
                <div class="find">
                    <a href="#"><i class="fas fa-question-circle" aria-hidden="true" style="margin-right: 10px; opacity: 1; color: #fff; font-size: 20px;"></i>Γνωρίστε τις Ετικέτες μας</a>
                </div>
                <a class="fakos2" href="/search.html"><img src="/media/svg/fakos.svg"></a>
                
     
    
            <script>
                $(document).ready(function() {
                    $("#searchopen").click(function() {
                        $(".searchpl2").slideToggle("slow");
                    });
                });
                $("body").click(function() {
                    $(".hide").fadeOut();
                    $(".search .closep").fadeOut();
                    $(".bgblack").fadeOut();
                });
                $(".pimg2bg").click(function() {
                    $(".pimg2").fadeOut();
                    $(".pimg2bg").fadeOut();
                });
                $(".pimg2").click(function() {
                    $(".pimg2").fadeOut();
                    $(".pimg2bg").fadeOut();
                });
                $(".closep").click(function() {
                    $(".pimg2").fadeOut();
                    $(".pimg2bg").fadeOut();
                    $(".bgblack").fadeOut();
                    $(".hide").fadeOut();
                    $(".search .closep").fadeOut();
                });
                $(".pimg").click(function() {
                    $(".pimg2").fadeIn();
                    $(".pimg2bg").fadeIn();
                });
                $(".stext").keyup(function() {
                    $(".search .closep").fadeIn();
                    $(".bgblack").show();
                    $(".hide p").hide();
                });
                $(".fakos2").click(function() {
                $(".search").load("/search.html");
            });
                /*$(function() {
        $('.hide a').before('<img src="/media/images/low/marata-epitrapezio-nero-phghs-xhtos-6x1.5l.jpg" class="flickr" />');
    });*/
            </script>
            <script type="text/javascript">
                /*********************************************** 
                 * Scroll To Top Control script- © Dynamic Drive DHTML code library (www.dynamicdrive.com) 
                 * Modified by www.MyBloggerTricks.com 
                 * This notice MUST stay intact for legal use 
                 * Visit Project Page at http://www.dynamicdrive.com for full source code 
                 ***********************************************/
                var scrolltotop = {
                    //startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control 
                    //scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top). 
                    setting: {
                        startline: 100,
                        scrollto: 0,
                        scrollduration: 500,
                        fadeduration: [500, 100]
                    },
                    controlHTML: '<img src="https://sites.google.com/site/sklplfiles/files/totop.png" style="width:36px; height:36px; transition: all .3s;">', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol" 
                    controlattrs: {
                        offsetx: 20,
                        offsety: 20
                    }, //offset of control relative to right/ bottom of window corner 
                    anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links
                    state: {
                        isvisible: false,
                        shouldvisible: false
                    },
                    scrollup: function() {
                        if (!this.cssfixedsupport) //if control is positioned using JavaScript 
                            this.$control.css({
                                opacity: 0
                            }) //hide control immediately after clicking it 
                        var dest = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto)
                        if (typeof dest == "string" && jQuery('#' + dest).length == 1) //check element set by string exists 
                            dest = jQuery('#' + dest).offset().top
                        else
                            dest = 0
                        this.$body.animate({
                            scrollTop: dest
                        }, this.setting.scrollduration);
                    },
                    keepfixed: function() {
                        var $window = jQuery(window)
                        var controlx = $window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx
                        var controly = $window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety
                        this.$control.css({
                            left: controlx + 'px',
                            top: controly + 'px'
                        })
                    },
                    togglecontrol: function() {
                        var scrolltop = jQuery(window).scrollTop()
                        if (!this.cssfixedsupport)
                            this.keepfixed()
                        this.state.shouldvisible = (scrolltop >= this.setting.startline) ? true : false
                        if (this.state.shouldvisible && !this.state.isvisible) {
                            this.$control.stop().animate({
                                opacity: 1
                            }, this.setting.fadeduration[0])
                            this.state.isvisible = true
                        } else if (this.state.shouldvisible == false && this.state.isvisible) {
                            this.$control.stop().animate({
                                opacity: 0
                            }, this.setting.fadeduration[1])
                            this.state.isvisible = false
                        }
                    },
                    init: function() {
                        jQuery(document).ready(function($) {
                            var mainobj = scrolltotop
                            var iebrws = document.all
                            mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode 
                            mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body')
                            mainobj.$control = $('<div id="topcontrol">' + mainobj.controlHTML + '</div>')
                                .css({
                                    position: mainobj.cssfixedsupport ? 'fixed' : 'absolute',
                                    bottom: mainobj.controlattrs.offsety,
                                    right: mainobj.controlattrs.offsetx,
                                    opacity: 0,
                                    cursor: 'pointer'
                                })
                                .attr({
                                    title: 'Scroll Back to Top'
                                })
                                .click(function() {
                                    mainobj.scrollup();
                                    return false
                                })
                                .appendTo('body')
                            if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != '') //loose check for IE6 and below, plus whether control contains any text 
                                mainobj.$control.css({
                                    width: mainobj.$control.width()
                                }) //IE6- seems to require an explicit width on a DIV containing text 
                            mainobj.togglecontrol()
                            $('a[href="' + mainobj.anchorkeyword + '"]').click(function() {
                                mainobj.scrollup()
                                return false
                            })
                            $(window).bind('scroll resize', function(e) {
                                mainobj.togglecontrol()
                            })
                        })
                    }
                }
                scrolltotop.init()
               
              
            </script>
            <style>
                #topcontrol {
                    position: absolute;
                    z-index: 15000;
                }
                #topcontrol:hover {
                    filter: grayscale(100%);
                    transition: all .3s;
                }
            </style>
        </div>
        <div class="search"></div>
    </body>
    </html>
    `;
}

createHeader();