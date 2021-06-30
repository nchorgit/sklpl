
        
  
    $(document).ready(function() {
  
  var show_per_page = 16;
  var number_of_items = $('.lprod').find('.explist1').length;
  var number_of_pages = Math.ceil(number_of_items / show_per_page);
  
  $('.cattitle').after('<div class=cout><div class=controls></div></div><input id=current_page type=hidden><input id=show_per_page type=hidden>');
  $('.cattitle b').append('<input id=current_title type=show>');
  $('.cout').append('<input id=current type=show><input id=current_pages type=show>');
  $('#current_title').val(number_of_items);
  $('#current').val(current_link);
  $('#show_per_page').val(show_per_page);
  $('#current_pages').val(number_of_pages);
  
  var navigation_html = '<a class="prev" onclick="previous()">‹</a>';
  var current_link = 0;
  while (number_of_pages > current_link) {
    navigation_html += '<a class="page" onclick="go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
    current_link++;
  }
  navigation_html += '<a class="next" onclick="next()">›</a>';
  
  $('.controls').html(navigation_html);
  $('.controls .page:first').addClass('active');
  
  $('.lprod').find(".explist1").css('display', 'none');
  $('.lprod').find(".explist1").slice(0, show_per_page).css('display', 'block');
  
  });
  
  
  
  function go_to_page(page_num) {
  var show_per_page = parseInt($('#show_per_page').val(), 0);
  
  start_from = page_num * show_per_page;
  
  end_on = start_from + show_per_page;
  
  $('.lprod').find(".explist1").css('display', 'none').slice(start_from, end_on).css('display', 'block');
  
  $('.page[longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');
  
  $('#current_page').val(page_num);
  }
  
  
  
  function previous() {
  
  new_page = parseInt($('#current_page').val(), 0) - 1;
  //if there is an item before the current active link run the function
  if ($('.active').prev('.page').length == true) {
    go_to_page(new_page);
  }
  
  }
  
  function next() {
  new_page = parseInt($('#current_page').val(), 0) + 1;
  //if there is an item after the current active link run the function
  if ($('.active').next('.page').length == true) {
    go_to_page(new_page);
  }
  
  }
  
  