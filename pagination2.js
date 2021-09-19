// pagination script w/ support from @biberman on stackoverflow - big thanks!


let startPage;
const pageSize = 6;
const totalSlidePage = 5;
const pageCount = Math.ceil($(".product-url").length / pageSize);
const slideRange = Math.floor(totalSlidePage / 2); 

slide = function() {
startPage = $("#pagin li a.current").parent().index();
let paginationStart = (startPage - slideRange) < 0 ? 0 :
(startPage >= (pageCount - slideRange) ? (pageCount - totalSlidePage) :
(startPage - slideRange));

$("#pagin li").hide();
for (let t = paginationStart; t < (paginationStart + totalSlidePage); t++) {
$("#pagin li").eq(t + 1).show();
}

next.show();
prev.show();

if (startPage == 1) {
prev.hide();
}
else if (startPage == pageCount ) {
next.hide();
}
}

showPage = function() {
console.log(startPage);
$(".product-url").hide();
$(".product-url").each(function(n) {
if (n >= pageSize * (startPage - 1) && n < pageSize * startPage)
$(this).show();
});
}

for (let i = 0 ; i < pageCount; i++) {
$("#pagin").append('<li><a href="#">' + (i + 1) + '</a></li> ');

if (i > pageSize) {
$("#pagin li").eq(i).hide();
}
}

let prev = $("<li/>").addClass("prev").html("Prev").click(function() {
let prevLi = $("#pagin li a.current").parent().prev().find("a");

if (prevLi[0]) {
$("#pagin li a.current").removeClass("current");
prevLi.addClass("current");
}

slide();

if (startPage != 0) {
showPage();
}
});

let next = $("<li/>").addClass("next").html("Next").click(function() {
let nextLi = $("#pagin li a.current").parent().next().find("a");

if (nextLi[0]) {
$("#pagin li a.current").removeClass("current");
nextLi.addClass("current");
}

slide();

if (startPage <= pageCount) {
showPage();
}
});

$("#pagin").prepend(prev).append(next);

$("#pagin li a").click(function() {
$('#pagin li a').removeClass('current');
$(this).addClass('current');

slide();
showPage();
});

$("#pagin li a").eq(0).addClass("current");

slide();
showPage();