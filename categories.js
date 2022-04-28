$('.prev-page').text('<')
$(document).ready(function(){
$( ".list-bottom" ).insertBefore($( ".lprod" ));
$( ".list-info" ).insertAfter($( ".lprod" ));
});
$(".taks").click()
$(".taks").click(function () {
$(".albut").toggle();
});
$(".albut").hide();
/*$(".lprod").load("/experts/database.html li.pagwta");*/
$(".wnormal").addClass("views-active");
$(".wlistes").click(function () {
$(".lprod").addClass("wlist");
$(".lprod").hide();
$(".lprod").stop().fadeIn(500);
$(".wnormal").removeClass("pointers");
$(".wlistes").addClass("pointers");
$(".wlistes").addClass("views-active");
$(".wnormal").removeClass("views-active");
});
$(".wnormal").click(function () {
$(".lprod").removeClass("wlist");
$(".lprod").hide();
$(".lprod").stop().fadeIn(500);
$(".wlistes").removeClass("pointers");
$(".wnormal").addClass("views-active");
$(".wnormal").addClass("pointers");
$(".wlistes").removeClass("views-active")
  });
  document.getElementById('sall').innerHTML = document.querySelectorAll('.post-title').length;
  $("#call").html($(".pcategory").html());
  $("#pag").html($(".pagination").html());
  $("button.button1").click(function () {
    $(".albut").hide();
  });
 $(document).ready(function(){
  $(".list-info").on( "click", function() {
    $( 'html, body' ).animate( { scrollTop: 0 }, 0 );
});
}); 
