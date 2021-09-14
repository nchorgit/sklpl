<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html expr:dir='data:blog.languageDirection' lang='el' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <link href='https://raw.githubusercontent.com/nchorgit/ergfiles/main/icon.png' rel='shortcut icon'/> 
<meta content='width=device-width' name='viewport'/>
<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Roboto:300,400,700|Roboto+Slab:300,400,700|&amp;subset=greek' rel='stylesheet'/>
<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i&amp;subset=greek,greek-ext' rel='stylesheet'/>
<link href='https://fonts.googleapis.com/css?family=Google+Sans:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i' rel='stylesheet'/>


<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'/>

<link href='https://kit-free.fontawesome.com/releases/latest/css/free.min.css' media='all' rel='stylesheet'/>
<link href='//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' rel='stylesheet' type='text/css'/>

<script>
$(&#39;.conform input[type=text], .conform input[type=email] &#39;).on(&#39;change invalid&#39;, function() {
    var textfield = $(this).get(0);
    
    // &#39;setCustomValidity not only sets the message, but also marks
    // the field as invalid. In order to see whether the field really is
    // invalid, we have to remove the message first
    textfield.setCustomValidity(&#39;&#39;);
    
    if (!textfield.validity.valid) {
      textfield.setCustomValidity(&#39;Αυτο το πεδίο είναι υποχρεωτικό&#39;);  
    }
});


$(&quot;a.current&quot;).text($(this).text().substr(0, 30)+&#39;...&#39;);
$(&quot;.separator&quot;).toggleClass(&#39;fimg&#39;);
</script>

  <script type='text/javascript'> 
  cookieOptions = { 
    msg: &quot;Αυτός ο ιστότοπος χρησιμοποιεί cookie από την Google για την παροχή των υπηρεσιών του και για την ανάλυση της επισκεψιμότητας. Η διεύθυνση IP σας και ο παράγοντας χρήστη σας κοινοποιούνται στην Google μαζί με μετρήσεις απόδοσης και ασφάλειας, ώστε να διασφαλιστεί η ποιότητα της υπηρεσίας, να δημιουργηθούν στατιστικά στοιχεία χρήσης και να εντοπιστεί και να αντιμετωπιστεί η κατάχρηση. &quot;, 
    link: &quot;https://policies.google.com/technologies/cookies?hl=el&quot;, 
    close: &quot;Αποδοχή&quot;, 
    learn: &quot;Περισσότερα&quot; }; 
</script> 

<!-- title of the page -->
<b:if cond='data:blog.pageType == &quot;index&quot;'>
<title><data:blog.pageTitle/></title> 
<b:else/>
<title><data:blog.pageName/> | <data:blog.title/></title>
</b:if>

<b:skin><![CDATA[
/* Start Pagination - Custom CSS */
#blog-pager, .blog-pager {
    display: flex;
    padding: 5px 0;
    position: relative;
    height: 40px;
}

span.showpageOf {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    right: 0;
color:#555;
font-size:13px;
}

.showpage a, .showpageNum a, .showpagePoint {
    height: 40px;
    line-height: 40px;
    /* padding: 0 15px; */
    background: #fff;
    border-radius: 4px;
    position: relative;
    color: #555;
    left: 0;
    display: flex;
    margin-right: 5px;
    width: 40px;
    text-align: center;
    justify-content: center;
}

.showpagePoint {
    background: tomato;
    color: #fff;
font-weight:bold
}
.showpage a:hover, .showpageNum a:hover, .showpagePoint:hover {
    background-color: #666;
    color: white;
    position: relative;
font-weight:bold
}
.CodeMirror {
    font-family: arial !important;
    height: 300px;
    color: black;
    direction: ltr;
}
@media screen and (min-width: 1925px) and (max-width: 2560px) {
body {zoom:130%;}
}
.slideshow-container {display:none;}
.rightcol {display:none;}
.navmessage {
    padding: 15px;
    text-align: center;
    margin-bottom: 30px;
    background: #ff8c00;
    font-size: 19px;
    color: #fff;
    border-left: 0px solid #972385;
    border-right: 0px solid #f9c500;
    position: relative;
    width: 100vw;
    left: 50%;
    top: -135px;
    margin-left: -50vw;
}

.navmessage i {
    margin-right: 10px;
    font-size: 20px;
    background: #47a5ad;
    padding: 12px;
    border-radius: 50%;
    color: #eee;
}

body {
    font-family: google sans, Roboto;
    margin: 0 auto;
    background: #eee;
    letter-spacing: 0px;

}
::-webkit-scrollbar {
    -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
    width: 12px;
}

::-webkit-scrollbar:horizontal {
    height: 10px;

}

::-webkit-scrollbar-thumb {
   background: #ccc;
border-top:solid 4px white;
    

}

::-webkit-scrollbar-track {
    border-radius: 10px;  
    background-color: #ffffff; 
}
html {
  scroll-behavior: smooth;
}
img.icon-action {
    width: 18px !important;
    height: 18px !important;
}
input {outline:0 !important;}
.post-body span {
    line-height: 23px !important;
    color: #555555;
    font-size: inherit !important;
}

}
div#at4-share {
    display: none;
}
.feed-links {display:none;}

.cookie-choices-info {
    position: fixed;
    width: 100%;
    background-color: #372845 !important;
    margin: 0;
    left: 0;
top: auto !important;
    bottom: 0 !important;
    padding: 0;
    z-index: 4000;
    text-align: center;
    color: #fff;
    line-height: 140%;
    padding: 25px !important;
    font-family: google sans, Arial, roboto !important;
border-left: 8px solid orange !important;
}
.cookie-choices-info .cookie-choices-text {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
   margin: 10px 20px 40px 20px !important;
    color: #fff !important;
    max-width: 800px;
    text-align: left;
}
cookie-choices-info .cookie-choices-buttons {
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    margin: 0 10px;
    /* background: orange; */
}
.cookie-choices-info .cookie-choices-button {
    font-weight: bold;
    text-transform: capitalize !important;
    white-space: nowrap;
    color: #000 !important;
    margin-left: 8px;
    padding: 15px !important;
    text-decoration: none;
    border-radius: 3px;
}
a.cookie-choices-button {
    background: orange;
    /* padding: 15px; */
}
.cookie-choices-info .cookie-choices-button:hover {
    background: red !important;
color: #fff !important;
}

#commentBodyField {
    font-family: arial !important;
    border: 2px solid #e5e5e5 !important;
}
#signoutLink {
    border: none !important;
    /* padding: 7px 10px; */
    border-radius: 3px !important;
    font-size: 14px !important;
    font-family: roboto !important;
    background: red !important;
    color: white !important;
}

#commentsHolder {
    padding: 18px 22px 10px 22px;
    background: #eae9e9 !important;
    border: 0;
    outline: none;
    border-radius: 3px;
}

.comment-form h4 {
    float: none !important;
    background: #9fc537 !important;
    color: #3d4e11 !important;
}

.comment-link {
    white-space: nowrap;
    float: right;
    background: #fdc906;
    border-radius: 3px;
    margin-top: 39px;
    padding: 7px 20px;
    color: white;
    border-radius: 50px;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    z-index: 10;
}

.comment-link::after {
    content: "";
    position: absolute;
    border: 15px solid;
    top: 10px;
    border-color: #fdc906 transparent transparent #fdc906;
    right: 45px;
    z-index: -1;
}
.comment-link:empty:before {
content: "Σχόλια";
    color: #333;
padding: 5px;
}
#comments h4 {
    white-space: nowrap;
    float: right;
    background: #357ae8;
    border-radius: 3px;
    margin-top: -45px;
    padding: 7px 10px;
    color: white;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
}

a {
    transition: all .3s;
    text-decoration: none;
}

a:hover {
    transition: all .3s;
}

.icon-action {
    border-style: none !important;
    margin: 0 0 0 .5em !important;
    vertical-align: middle;
    width: 18px;
}

.wrapper {
    width: 100%;
    margin: 0px auto;
}

.topdate {
    background: #f8f8f8;
    font-size: 14px;
    padding: 8px 20px;
    margin: 0px 0px 0px 0px;
    border-left: 2px solid #ccc;
}

.topdate i {
    color: royalblue;
    margin-right: 10px;
}

#header {
    display: none;
}

.header {
    width: 100%;
    height: auto;
    background-color: #372845;
    position:fixed;
top: 0;
    margin: 0 auto;
z-index:100;
}

.menu {
    width: auto;
    height: 38px;
    float: right;
}

.blogcontent {
    max-width: 1300px;
    margin: 70px auto;
    padding: 15px;
    min-height: 1000px;
}

.post-body {
    margin-top: 30px;
    margin-bottom: 0;
    padding: 0;
    
    color: #555555;
    font-size: 16px;
line-height:25px;

display: block;
}
table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
min-width: 600px;
}
.fvid {
display: inline-block;
    position: relative !important;
    padding-top: 30px;
    padding-bottom: 56.25%;
    width: 100%;
    height: 0px;
    max-height: 100%;
}
post iframe {
position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
}
.tabtout {
    overflow-x: auto;
}

tr:nth-of-type(1) {
    background: #999 !important;
    color: white;
    font-weight: bold;
    text-align: center;
}

tr:nth-of-type(odd) {
    background: #f2f2f2;
}

td {
    padding:10px;
    border: 1px solid #ddd;
}
table p {
margin:0px
}
.footer {
    width: 100%;
    height: auto;
    background-color: gray;
    text-align: center;
    
}

.clear {
    clear: both;
}




/*############Recent Posts Widget##################*/
.itag {
    background: ;
    padding: 0px 5px;
    color: #666;
    font-size: 11px;
    font-weight: bold;
    border-radius: 0px;
    border-left: 0px solid #ff7805;
}

.iauthor {
    display: none !important;
}

.iedit {
    display: none !important;
}

.mbtlist {
    list-style-type: none;
    overflow: hidden;
    padding: 0;
    margin: 0;
    border-top: 5px solid #fff;
    background: #fff;
}

.mbtlist li {
    margin: 0px auto -10px auto;
    clear: both;
    color: #666;
    position: relative;
    font-size: 12px;
    background: #fff;
    padding: 10px 15px;
    border-bottom: 1px solid #333;
}

.mbtlist i {
    color: #999;
    padding-right: 4px;
}

.mbtlist .iline {
    line-height: 2em;
    clear: both;
    margin: 5px -15px -1px -20px;
    padding: 5px 15px;
    font-size: 12px;
    background: #ffffff;
    color: #555;
    border-top: 2px solid #eeeeee;
    border-bottom: 6px solid #eeeeee;
}

.mbtlist div span {
    margin: 0 15px 0 0px;
    display: inline-block;
}

.mbtlist span {
    display: block;
    margin: 5px 0px 0px;
    padding-right: 5px;
}

.mbtlist .icon {
    color: #666;

    font-size: 0px;
    text-align: left;
}

.mbtlist img {
    float: left;
    margin: 0px 10px 10px 0px;
    border: 1px solid #orange;
    padding: 0px;
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 0px;
}

.mbtlist .mbttitle {
    font-size: 16px;
    color: #555;
    font-weight: bold;
    text-decoration: none;
}

.mbtlist .mbttitle:hover,
.mbtlist .itotal a:hover {
    color: #00A5FF;
}

.icomments {
    display: none;
}
span.idate {
    font-size: 11px;
}
.mbtlist .iedit a {
    text-decoration: none;
    color: #999;
    cursor: pointer
}

.mbtlist .iedit:before,
.mbtlist .iauthor:before,
.mbtlist .itag:before,


.mbtlist .itotal span:before {
    font-family: fontAwesome;
    position: relative;
    padding-right: 5px;
}

.mbtlist .iauthor:before {
    content: '\f007';
}





.mbtlist .idate:before {
    content: url(https://raw.githubusercontent.com/nchorgit/ergfiles/main/DATE.svg);
    width: 12px;
    height: 10px;
    position: absolute;
    display: inline-block;
    margin-left: -16px;
    opacity: .7;
    filter: grayscale(1);
    top: 110px;
}



.mbtlist .imore {
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    background: #47a5ad;
    padding: 5px;
    float: right;
    border-radius: 2px;
    position: absolute;
    bottom: 62px;
}

.mbtlist .itotal {
    color: #333;
    padding: 5px 10px;
    border: 1px solid #eee;
    display: none;
}

.mbtlist .itotal a {

    font-size: 12px;
    font-weight: normal;
    color: #0080ff;
    text-decoration: none
}

.mbtlist .itotal span:before {
    content: '\f07c';
}

.mbtlist .itotal span font {
    padding: 0px 3px;
    color: #333;
    font-family: georgia;
    font-size: 15px;
    font-weight: bold
}


.clear{
clear:both;
}


#comments {
    margin-top: -30px;
 
    padding: 15px;

    margin-bottom: 0;
    background: white;
}

div#layout {
    font-family: roboto !important;
}

#postCommentSubmit {
    background-color: #4d90f0;
    border: 0px solid #3079ed;
    color: #fff;
    font-weight: bold;
    margin: 0 8px 6px 0;
    width: auto !important;
}

textarea#commentBodyField {
    font-family: sans-serif !important;
    background: #eee !important;
}

.comments .avatar-image-container {
    float: left;
    max-height: 38px;
    overflow: hidden;
    width: 38px;
    position: relative;
    top: 12px;
    left: 0px;
    background-color: red;
    border-radius: 50%;
}

.comment-header {
    margin-top: 20px !important;
}

.comments .avatar-image-container img {
    max-width: 36px;

}

<!--item-control a {
    color: white;
}

item-control {
    display: inline !important;
    background: red;
    font-size: 14px;
    padding: 7px 7px 7px 10px;
    border-radius: 3px;
    font-weight: bold;
}-->

p.comment-content {
    padding: 15px;
    background: #eee;
    margin-top: 30px !important;
    font-size: 14px;
    margin-bottom: 30px !important;
    border-radius: 3px;
}

cite.user a {
    background: #97e897;
    padding: 10px;
    color: black;
    border-left: 2px solid #71b571;
    font-size: 14px;
}

span.datetime.secondary-text a {
    font-size: 14px;
    color: #444;
    background: #f8f8f8;
    border-left: 2px solid #cccccc;
    padding: 10px;
}

a.comment-reply {
    background: #c9f2c9;
    color: black;
    font-size: 14px;
    padding: 7px 10px !important;
    margin-right: 10px;
    border-radius: 3px;
    width: 11%;
    text-align: center;
    font-weight: bold;
}

.home-link,
.home-link a {
    display: none;
}

#blog-pager-older-link a {
    background: white;
    color: #6d6d6d;
    width: 18px;
    padding: 7px;
    z-index: 2;
    line-height: 15px;
    float: right;
    border-radius: 3px;
    margin: 15px;
    font-size: 27px;
    height: 18px;
}
#blog-pager-older-link:last-child {display:none;}
#blog-pager-older-link a:hover,
#blog-pager-newer-link a:hover {
    float: right;
    background-color: #ff5500;
    color: white;
}

#blog-pager-newer-link a {
    background: white;
    color: #6d6d6d;
    width: 18px;
    padding: 7px;
    z-index: 2;
    line-height: 15px;
    float: left;
    border-radius: 3px;
    margin: 15px;
    font-size: 27px;
    height: 18px;
}

#homeb2 a {
    background: white;
    padding: 6.5px;
    width: 30%;
    position: relative;
    margin: 0px auto;
    color: #6d6d6d;
    line-height: 18px;
    border: 1px solid #d2d2d2;
    top: 7px;
    left: 0px;
    right: 0px;
    display: none;
}

#homeb2 a:hover {
    background-color: #ff5500;
    color: white;
}

#prevgr {
    background: #d6d6d6;
    color: white;
    width: 18px;
    padding: 7px;
    float: left;
    border-radius: 6px;
    display: none;
}

#nextgr {
    background: #d6d6d6;
    color: white;
    width: 18px;
    padding: 7px;
    float: right;
    border-radius: 6px;
    display: none;
}


.sidebar h2 {
    background: #fff;
    font-size: 22px;
    margin: 0;
    padding: 14px 15px;
    color: #47a5ad;
    font-weight: 500;
    letter-spacing: -.5px;
    position: relative;
}
.PopularPosts .widget-content ul li {
    padding: 15px 0 25px 0;
}

.item-content {
    border-bottom: 1px solid #ddd;
    padding: 15px;
    margin: -15px;
}

.PopularPosts .item-thumbnail {
    float: left;
    margin: 0 5px 5px 0;
}

.item-title a {
    padding-bottom: 5px;
    color: #444444;
    font-size: 18px;
    font-weight: bold;
}

.item-snippet {
    font-size: 13px;

    position: relative;
    top: 5px;
}

.sbold {
    font-weight: bold;
    margin-left: 20px;
}

.date span::before {
    content: url(https://raw.githubusercontent.com/nchorgit/ergfiles/main/DATE.svg);
    width: 15px;
    height: 10px;
    position: relative;
    display: inline-block;
    margin-left: -25px;
    opacity: .7;
    filter: grayscale(1);
    top: 3px;
    margin-right: 7px;
}

.fmenu {
  display: flex;
  padding: 0px 15px;
  justify-content: space-between;
  max-width: 1300px;
  height:77px;
  position:relative;

margin:0 auto;
}

.logo {
    align-items: center;
    width: 600px;
    position: relative;
    left: 0px;
    top: 7px;
    height: 60px;
    text-transform: uppercase;
}

.logo svg {
    height: 55px;
    position: absolute;
    left: 0;
    top: 4px;
}

.logo p {
    font-family: google sans;
    line-height: 13.5px;
    color: #a695b6;
    position: absolute;
    left: 68px;
    top: -6px;
    font-size: 11px;
    text-rendering: optimizeLegibility;
}

img.shome {
    left: 205px;
    height: 68px;
    top: 2px;
position: relative;

}

.searchin {
    width: 100%;
    background: #1a1a1a;
    padding: 0px;
    position: fixed;
    height: 70px;
    display: none;
    top: 75px;
    z-index: 10;
}
.searchplinput {
  width: 93%;
border: 0;
padding-left: 10px;
height:40px;
position: absolute;
top:15px;
left:15px;
background: transparent;
border-left:0px solid #666;
outline: none;
font-family: google sans, arial, roboto;
color:#eee;
font-size: 18px

}

.search {
    padding: 0px;
    position: absolute;
    margin: auto;
    height: 22px;
    top: 0;
    bottom: 0;
    right: 15px;
}

.search:hover {
cursor: pointer;
  opacity:.8;
transition: all .3s;
}
.searchpbutton {
  background: transparent;
  padding-left: 10px;
  border:none;
  width:40px;
  height: 40px;
  position: absolute;
  right: 15px;
  top:15px;
  border-left:0px solid #666;
 
  
}
.searchpbutton:hover {
  cursor: pointer;
  opacity:.8;

}
.marrow {
  height: 20px;
  position: relative;
  top:2px;
}

.search i {
  color:white;
  font-size: 22px;
}
i {
  font-size: 13px;
}
.tmenu {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    height: 75px;
    left: 260px;
}

.tmenu a {
 
  padding: 12px;
  text-decoration: none;
  color: #eee;
  
}

.tmenu a:hover {
 background:#5e4a70;
  padding: 12px;
  text-decoration: none;
  color: #eee;
  border-radius: 3px;
  
}
.dcontent1, .dcontent2 {
 text-align: center;
  padding: 15px;
 display: none;
 
   width: auto;
position: relative;
    top: 75px;
  background: #444;
  border-bottom: 1px solid #222;
z-index:10;
  
}
.contact a {
    background: #357ae8;
    border-radius: 50px;
    position: relative;
    left: 35px;
    font-weight: bold;
    padding: 10px 20px;
color:#fff;
}

.contact a:hover {
    background: #2d5493;
    padding: 10px 20px;
    border-radius: 50px;
}

.dcontent1 a, .dcontent2 a {
  padding: 15px;
  text-decoration: none;
  color: #eee;

}

.dcontent1 a:hover, .dcontent2 a:hover {
  background:#333;
  
}
.smenu {
    display: none;
    position: relative;
    top: 75px;
    z-index: 2;
    width: 100%;
}

.smenu a {
background: #444;
  padding: 15px;
  text-decoration: none;
  color: #eee;
  display: block;
  text-align: left;
  border-bottom: .5px solid #333;
}
.smenu a:hover {
  background:red;
}
.epik {
  padding: 15px;
  background: #333;
  color: #eee;
}
.smenu1 a {
  background: #555;
  border-left: 8px solid orange;
}
.smenu i {
  width: 25px;
}
.hampm {
    display: none;
    position: absolute;
    border-radius: 3px;
    background-color: transparent;
    color: #f2f2f2;
    text-align: center;
    text-decoration: none;
    width: 20px;
    height: 20px;
    right: 75px;
    z-index: 3;
    top: 29px;
}
 

  .line1 {
    background-color: rgb(252, 200, 6);
    position: absolute;
    left: 0px;
    right: 0;
    margin:auto;
    top: 0px;
    width: 34px;
    height: 3px;
    z-index: 2;
  }

  .line2 {
    background-color: rgb(84, 192, 201);
    position: absolute;
    left: 0px;
    right: 0;
    bottom:0;
    top:0;
    margin:auto;
    
    width: 34px;
    height: 3px;
    z-index: 3;
  }

  .line3 {
    background-color: rgb(234, 28, 36);
    position: absolute;
     left: 0px;
    right: 0;
    bottom:0px;
    top:auto;
    margin:auto;
    
    width: 20px;
    height: 3px;
    z-index: 4;
  }


.tfooter {
    background: #ccc;
    padding: 20px 15px;
    border-top: 0px solid #e3e3e3;
}
.tfooterm {
  text-align: center;
}

.tfooterm a {
    text-decoration: none;
    padding: 10px 15px;
    color: #372845;
    font-size: 15px;
    line-height: 30px;
    background: #f9f9f9;
    display: inline-block;
    margin: 10px;
    border-radius: 3px;
    font-weight: bold;
}
.tfooterm a:hover {
  
  background: #444;
color: #eee;
  
}
.tfooter2 {
    background: #372845;
    padding: 5px 15px;
}

.tfooterm2 {
  text-align: center;
  padding: 15px;
  color: #ddd;
  font-size: 15px;
  line-height: 25px;
}
.slider, trecent {
display:none;
}

@media only screen and (max-width:1300px) {
.fmenu {
 justify-content: space-between;

}
.tmenu {
 display: none;
}
.hampm {
    display: block;
}
.dcontent1, .dcontent2 {
display:none;}    
    }
@media only screen and (max-width:1190px) {

.cookie-choices-info {
   width: auto !important;
}
}

@media only screen and (max-width:786px) {
.jump-link {
    margin-top: 30px;
}
}

@media only screen and (max-width:530px) {
.tfooterm a {
display:block;
font-size: 18px;
}

.tfooter {
padding:25px 5px;
}
.footer {
margin-top:-30px;
}
.logo p {
 
    line-height: 12px;

    left: 68px;
    top: -1px;
    font-size: 9px;

}
img.shome {
    left: 179px;
    height: 60px;
    top: 10px;
position: relative;
}

}



]]></b:skin>

</head>

<body>
<div class='wrapper'>
<div class='header'>
  <div class='fmenu'>

<div class='logo'><a href='https://www.erg-sklavenitis.gr/'>
<svg viewBox='0 0 67.26 65' xmlns='http://www.w3.org/2000/svg'><defs><style>.cls-1{fill:#fdc906;}.cls-2{fill:#a4cc38;}.cls-3{fill:#47a5ad;}.cls-4{fill:#ea1c24;}.cls-5{fill:#f2801f;}.cls-6{fill:#9f228b;}.cls-7{fill:#a15641;}</style></defs><title>logotr</title><g data-name='Layer 2' id='Layer_2'><g data-name='Layer 1' id='Layer_1-2'><g data-name='Layer 1-2' id='Layer_1-2-2'><path class='cls-1' d='M10.89,34.62a2.78,2.78,0,0,1,1.82.83c2.32,2.41,4.38,6.54,6.9,9.3.93,1.56-2.19,4.2-3.57,5.4-2.71,2.16-4.81,3.25-6.3,3.25h-.1C8.36,53.26,8.59,48,9.92,48H10a7.16,7.16,0,0,0,1.79.25c2.74,0,3.66-2.07,3.22-4.15-.53-2.32-4-3.9-5.53-5.44C8.13,36.94,9.23,34.62,10.89,34.62Z'/><path class='cls-2' d='M8.43,19c.79,0,1.56.56,1.75,1.89.26,2.84-.6,6.64-.43,9.84-.21,1.54-3.7,1.54-5.25,1.54a13.21,13.21,0,0,1-3.31-.46c-2.72-1.07-.06-4.06.94-4.06,1.16.08,2.63,2,3.7,2,.53,0,1-.48,1.25-2,.37-2-.55-4.71-.76-6.55A2.27,2.27,0,0,1,8.43,19Z'/><path class='cls-2' d='M15.69,26.83a1.75,1.75,0,0,1,1.06.33c.64.46.57,1.29-.16,1.83a2.48,2.48,0,0,1-1.42.44,1.76,1.76,0,0,1-1-.31c-.64-.46-.57-1.29.16-1.84A2.59,2.59,0,0,1,15.69,26.83Z'/><path class='cls-1' d='M19,31.39a1.66,1.66,0,0,1,1.32.72,6.21,6.21,0,0,1,0,4.45c-.83,2.81-.54,5.21,5.06,5.81,1.88.61,2.17,1.53.87,2.68a5.27,5.27,0,0,1-2.64.78h-.39c-2.12-.19-4.65-3-6.05-6.69-1-2.77-1.16-5-.11-6.64A2.74,2.74,0,0,1,19,31.39Z'/><path class='cls-1' d='M23.31,36.27c.89,0,1.39.8,1.17,1.81a2.62,2.62,0,0,1-2.13,2h-.07c-.88,0-1.38-.8-1.16-1.83a2.58,2.58,0,0,1,2.12-2Z'/><path class='cls-2' d='M15.34,21.3c1.08,0,1.75.54,1.73,1.56a5.16,5.16,0,0,1-2.38,2.91c-2,1.39-3.16,3.12.25,6.53.9,1.45.62,2.19-.88,2.24a4.39,4.39,0,0,1-2.4-1.17c-1.27-1.25-1.49-4.56-.42-7.64.81-2.33,1.95-3.87,3.49-4.38A4.07,4.07,0,0,1,15.34,21.3Z'/><path class='cls-3' d='M15.26,16.24h.07A1.85,1.85,0,0,1,17,17.4c.16.59-.28,1.05-1,1.05h-.07a1.79,1.79,0,0,1-1.65-1.16C14.13,16.71,14.55,16.24,15.26,16.24Z'/><path class='cls-3' d='M14.74,7.67c1.1,0,2,1,1.16,2.43-1.28,1.9-3.77,3.9-5.26,6a1,1,0,0,1-.63.22c-1.07,0-2.72-1.29-3.49-1.93-1.94-1.59-3-2.91-3.17-3.94,0-.57,1.38-1,2.48-1C6.5,9.45,7,9.61,7,10c0,2.24,1.08,3.14,2.24,3.14a2.73,2.73,0,0,0,1.16-.26c1.49-.68,2-3.24,2.85-4.51A2,2,0,0,1,14.74,7.67Z'/><path class='cls-3' d='M17.52,12.54a3.38,3.38,0,0,1,1.09.19c1.06.6,1.37,1.41.74,2.17a3.77,3.77,0,0,1-2.32.66,3.42,3.42,0,0,1-.64,0h-.64c-1.7,0-2.91.79-2.51,4.28-.09.89-.37,1.33-.83,1.33a1.46,1.46,0,0,1-.85-.5,3.67,3.67,0,0,1-1-2c-.19-1.45,1.32-3.6,3.59-5A6.74,6.74,0,0,1,17.52,12.54Z'/><path class='cls-4' d='M25.28,47.15h.38c3.88.51,8.73,2.86,13,3.59,1.16.46,1.39,2.33,1.16,4.2-.36,2.73-1.65,9.46-4.29,10.06h-.14c-1.43,0-4.21-4.55-3-5.09,4.78-2,2.9-4.83,2.8-5A5,5,0,0,0,34,53.47a6.77,6.77,0,0,0-4.23-1c-.62,0-1.26,0-1.88.06a16.26,16.26,0,0,1-1.71,0h-1C21.91,51.67,21.59,47.15,25.28,47.15Z'/><path class='cls-4' d='M36.77,39.8A1.75,1.75,0,0,1,38.26,41a3.12,3.12,0,0,1-.5,3.4,1.36,1.36,0,0,1-.91.38,1.77,1.77,0,0,1-1.51-1.17,3.13,3.13,0,0,1,.51-3.39A1.39,1.39,0,0,1,36.77,39.8Z'/><path class='cls-4' d='M29.59,38.35a2.49,2.49,0,0,1,.61.08c1.17.37,2.77,2.57,3.23,4.11.81,2,1.87,3.56,3.93,3.56a9.47,9.47,0,0,0,4.88-1.9,4.72,4.72,0,0,1,1.53-.29c1,0,1.46.72,1.17,2.19A6.08,6.08,0,0,1,42.72,49a5,5,0,0,1-2.78.69,15.09,15.09,0,0,1-7.47-2.5c-2.92-1.81-4.65-3.82-4.9-6C27.61,39.4,28.36,38.35,29.59,38.35Z'/><path class='cls-5' d='M50.91,32.77a2.79,2.79,0,0,1,1.16.31,3.7,3.7,0,0,1,2,3.49A1.53,1.53,0,0,1,52.5,37.9a2.24,2.24,0,0,1-1.16-.31,3.62,3.62,0,0,1-2-3.48A1.54,1.54,0,0,1,50.91,32.77Z'/><path class='cls-5' d='M60,41.7c2.19,0,4.48,4.54,5.56,6.62,1.26,2.64,2.62,9.06.83,9.17-.51,0-1,.06-1.42.06-5.46,0-4.43-2.62-4.37-2.76,2-4.72,0-7-3.3-7.11S51,51.74,48.49,53.3a4.07,4.07,0,0,1-1.64.36c-3,0-5.06-3.4-1.72-5.68,3.88-2.33,10-3.73,14.4-6.21A2.65,2.65,0,0,1,60,41.7Z'/><path class='cls-5' d='M60.13,31.37c.6,0,1.16.5,1.72,1.52a7.06,7.06,0,0,1,.1,4.29c-.89,2.78-5.43,5.3-10.64,5.92a20.06,20.06,0,0,1-2.32.14c-2.81,0-5-.68-6.46-2.15-1.37-2-1.27-3.67.47-4.48a2.82,2.82,0,0,1,1-.15,10,10,0,0,1,4.88,1.64,7.79,7.79,0,0,0,3.73,1.28c2,0,3.92-1.53,5.45-6.16C58.75,32,59.45,31.37,60.13,31.37Z'/><path class='cls-6' d='M21.13,9.4a1,1,0,0,1,.65.28,1.57,1.57,0,0,1,.5,1.7.64.64,0,0,1-.62.43.94.94,0,0,1-.64-.26,1.6,1.6,0,0,1-.52-1.67A.7.7,0,0,1,21.13,9.4Z'/><path class='cls-6' d='M21.34,7.31a8.34,8.34,0,0,1,1,0,4.56,4.56,0,0,1,3.55,1.74c.38.95.18,1.67-.63,1.85h-.13A3.93,3.93,0,0,1,22.9,9.74a2.86,2.86,0,0,0-1.82-.94c-.77,0-1.59.57-2.54,2.13a1.49,1.49,0,0,1-.94.56c-.31,0-.54-.27-.71-.82a3.13,3.13,0,0,1,.38-1.82C17.78,7.89,19.44,7.31,21.34,7.31Z'/><path class='cls-6' d='M17.56,0A3.92,3.92,0,0,1,19,.28c.41.21.53.63.36.85-1.6,1.94-.65,3.36.8,3.72a1.48,1.48,0,0,0,.42,0c1.27,0,2.76-1.16,3.85-1.57h.35c1.49,0,2.33,1.91.57,2.6s-4.53.64-6.69,1.26h-.06c-1,0-1.61-2.33-1.89-3.35-.34-1.52-.94-3-.33-3.48A1.94,1.94,0,0,1,17.56,0Z'/><path class='cls-7' d='M29.27,8.24c.29,0,.55.23.65.63a1.35,1.35,0,0,1-.48,1.42.62.62,0,0,1-.32.09c-.29,0-.54-.23-.65-.63A1.34,1.34,0,0,1,29,8.35.79.79,0,0,1,29.27,8.24Z'/><path class='cls-7' d='M27.82,5.84a6,6,0,0,1,3.6,1.7,4,4,0,0,1,1.64,3c-.16.67-.5,1-1,1a1,1,0,0,1-.42-.09,3.11,3.11,0,0,1-1.06-2c-.21-1-.62-1.87-1.8-1.87a4.78,4.78,0,0,0-1.86.47h-.39c-.64,0-.84-.35-.59-1.05a2.8,2.8,0,0,1,1.19-1.07A2,2,0,0,1,27.82,5.84Z'/><path class='cls-7' d='M31.53.06a1.72,1.72,0,0,1,.94.22c.34.26.42,1.34,0,1.44-2.09.54-2.14,2-1.3,3s2.71.8,3.76,1.16c1.23.58,1.16,2.33-.17,2.33a2.65,2.65,0,0,1-.48-.07C32.67,7.6,30.8,6.23,29,5.57c-.79-.47,0-2.43.3-3.3s.5-1.68,1-1.94A2.73,2.73,0,0,1,31.53.06Z'/></g></g></g></svg>
<p>Πανελλαδικό Σωματείο<br/>
Εργατοϋπαλλήλων<br/>Επιχείρησης<br/>
    <b style='color: #f1f1f1;'>Ε. Υ. Σκλαβενίτης</b></p></a>
<img class='shome' src='https://s4.gifyu.com/images/200years.png' style='display:none;'/>
</div>
<div class='hampm'>
<div class='line1'/>
<div class='line2'/>
<div class='line3'/>
</div>
<div class='tmenu'>
  <div><a href='https://www.erg-sklavenitis.gr/p/about.html'><i class='fas fa-users' style='margin-right:8px;'/>Ποιοι είμαστε</a></div>
  <div class='dropbtn1'><a href='#'><i class='fas fa-newspaper' style='margin-right:8px;'/><b>Επικαιρότητα</b><i class='fas fa-chevron-down' style='color: orange; margin-left:8px'/></a>
  </div>
 <div><a href='#'><i class='fas fa-book' style='margin-right:8px;'/>Βιβλιοθήκη</a></div>
  </div>
  <div><a href='https://www.erg-sklavenitis.gr/p/links.html'><i class='fas fa-link' style='margin-right:8px;'/>Χρήσιμοι σύνδεσμοι</a></div>
  <div><a href='https://www.erg-sklavenitis.gr/p/prosfores.html'><i class='fas fa-gifts' style='margin-right:8px;'/>Προσφορές</a></div>
  <div class='contact'><a href='https://www.erg-sklavenitis.gr/p/contact.html'><i class='fas fa-envelope' style='margin-right:8px;'/>Επικοινωνία</a></div>
 
</div>
<div class='search'><i class='fas fa-search'/></div>
</div>
 
<header>
<b:section class='header' id='header' maxwidgets='1' showaddelement='no'>
  <b:widget id='Header1' locked='true' title='Πανελλαδικό Σωματείο Εργατοϋπαλλήλων Επιχείρησης ΕΛΛΗΝΙΚΕΣ ΥΠΕΡΑΓΟΡΕΣ ΣΚΛΑΒΕΝΙΤΗΣ (Κεφαλίδα)' type='Header'>
    <b:widget-settings>
      <b:widget-setting name='displayUrl'/>
      <b:widget-setting name='displayHeight'>0</b:widget-setting>
      <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
      <b:widget-setting name='useImage'>false</b:widget-setting>
      <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
      <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
      <b:widget-setting name='displayWidth'>0</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>

  <b:if cond='data:useImage'>
    <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
      <!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      -->
      <b:if cond='data:mobile'>
        <div id='header-inner'>
          <div class='titlewrapper' style='background: transparent'>
            <h1 class='title' style='background: transparent; border-width: 0px'>
              <b:include name='title'/>
            </h1>
          </div>
          <b:include name='description'/>
        </div>
      <b:else/>
        <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height                      + &quot;_height: &quot; + data:height                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
          <div class='titlewrapper' style='background: transparent'>
            <h1 class='title' style='background: transparent; border-width: 0px'>
              <b:include name='title'/>
            </h1>
          </div>
          <b:include name='description'/>
        </div>
      </b:if>
    <b:else/>
      <!--Show the image only-->
      <div id='header-inner'>
        <a expr:href='data:blog.homepageUrl' style='display: block'>
          <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
        </a>
        <!--Show the description-->
        <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
          <b:include name='description'/>
        </b:if>
      </div>
    </b:if>
  <b:else/>
    <!--No header image -->
    <div id='header-inner'>
      <div class='titlewrapper'>
        <h1 class='title'>
          <b:include name='title'/>
        </h1>
      </div>
      <b:include name='description'/>
    </div>
  </b:if>
</b:includable>
    <b:includable id='description'>
  <div class='descriptionwrapper'>
    <p class='description'><span><data:description/></span></p>
  </div>
</b:includable>
    <b:includable id='title'>
  <b:tag cond='data:blog.url != data:blog.homepageUrl' expr:href='data:blog.homepageUrl' name='a'>
    <data:title/>
  </b:tag>
</b:includable>
  </b:widget>
</b:section>
</header>
</div><!-- end Header div -->
<nav class='menu'><!-- your menu --></nav>

<div class='dcontent1'>
  <a href='https://www.erg-sklavenitis.gr/search/label/Ανακοινώσεις?&amp;max-results=8'><i class='fas fa-bullhorn' style='margin-right:8px;'/>Ανακοινώσεις</a>
  <!--<a href='https://www.erg-sklavenitis.gr/search/label/Δράσεις?&amp;max-results=8'><i class='fas fa-hand-point-right' style='margin-right:8px;'/>Δράσεις</a>-->
  <a href='https://www.erg-sklavenitis.gr/search/label/Αναλύσεις?&amp;max-results=8'><i class='fas fa-chart-bar' style='margin-right:8px;'/>Αναλύσεις</a>
  <a href='https://www.erg-sklavenitis.gr/search/label/Άρθρα?&amp;max-results=8'><i class='fas fa-file-alt' style='margin-right:8px;'/>Άρθρα</a>

</div>


<div class='dcontent2'>
<a href='https://www.erg-sklavenitis.gr/search/label/Εργασιακά δικαιώματα?&amp;max-results=8'><i class='fas fa-balance-scale-right' style='margin-right:8px;'/>Εργασιακά δικαιώματα</a>
<a href='https://www.erg-sklavenitis.gr/p/charter.html'><i class='fas fa-file' style='margin-right:8px;'/>Καταστατικό</a>
<a href='https://www.erg-sklavenitis.gr/search/label/Εργασιακά θέματα?&amp;max-results=8'><i class='fas fa-people-carry' style='margin-right:8px;'/>Εργασιακά θέματα</a>
</div>


<div class='searchin'>
  <form action='https://www.erg-sklavenitis.gr/search'>
    <input class='searchplinput' name='q' placeholder='Αναζήτηση' type='search'><input name='max-results' type='hidden' value='8'/></input>
    <button class='searchpbutton' type='submit' value='search'><img class='marrow' src='https://i.imgur.com/NaKYZRW.png'/></button>
  </form>
</div>
<div class='smenu'>
  <div><a href='https://www.erg-sklavenitis.gr/p/about.html'><i class='fas fa-users' style='margin-right:8px;'/>Ποιοι είμαστε</a></div>
  <div class='epik'><i class='fas fa-newspaper' style='margin-right:8px;'/><b>Επικαιρότητα</b><i class='fas fa-chevron-down' style='color: orange; margin-left:5px'/></div>
<div class='smenu1'>
  <div><a href='https://www.erg-sklavenitis.gr/search/label/Ανακοινώσεις?&amp;max-results=8'><i class='fas fa-bullhorn' style='margin-right:8px;'/>Ανακοινώσεις</a></div>
  <!--<div><a href='https://www.erg-sklavenitis.gr/search/label/Δράσεις?&amp;max-results=8'><i class='fas fa-hand-point-right' style='margin-right:8px;'/>Δράσεις</a></div>-->
  <div><a href='https://www.erg-sklavenitis.gr/search/label/Αναλύσεις?&amp;max-results=8'><i class='fas fa-chart-bar' style='margin-right:8px;'/>Αναλύσεις</a></div>
  <div><a href='https://www.erg-sklavenitis.gr/search/label/Άρθρα?&amp;max-results=8'><i class='fas fa-file-alt' style='margin-right:8px;'/>Άρθρα</a></div>
</div>

<div class='epik'><i class='fas fa-book' style='margin-right:8px;'/>Βιβλιοθήκη<i class='fas fa-chevron-down' style='color: orange; margin-left:5px'/></div>
<div class='smenu1'>
<div><a href='https://www.erg-sklavenitis.gr/search/label/Εργασιακά δικαιώματα?&amp;max-results=8'><i class='fas fa-balance-scale-right' style='margin-right:8px;'/>Εργασιακά δικαιώματα</a></div>
<div><a href='https://www.erg-sklavenitis.gr/p/charter.html'><i class='fas fa-file' style='margin-right:8px;'/>Καταστατικό</a></div>
<div><a href='https://www.erg-sklavenitis.gr/search/label/Εργασιακά θέματα?&amp;max-results=8'><i class='fas fa-people-carry' style='margin-right:8px;'/>Εργασιακά θέματα</a></div>
</div>

  <div><a href='https://www.erg-sklavenitis.gr/p/links.html'><i class='fas fa-link' style='margin-right:8px;'/>Χρήσιμοι σύνδεσμοι</a></div>
  <div><a href='https://www.erg-sklavenitis.gr/p/prosfores.html'><i class='fas fa-gifts' style='margin-right:8px;'/>Προσφορές</a></div>
  <div><a href='https://www.erg-sklavenitis.gr/p/contact.html'><i class='fas fa-envelope' style='margin-right:8px;'/>Επικοινωνία</a></div>
</div>

<!--SLIDER-->

<style>
.frecent i {
margin-right: 8px;
    font-size: 22px;
    background: #47a5ad;
    padding: 12px;
    border-radius: 50%;
    color: #eee;

}  

.slider {
    background: #271c31;
    margin-top: 70px;
    height: 500px;
}

.sliderin {
  
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 15px 0px 15px;
  overflow: hidden;
  background-image: url(https://raw.githubusercontent.com/nchorgit/ergfiles/main/bglogo.png);
  background-repeat: no-repeat;
  background-size: 700px;
  background-position: 80px center;
}
.sliderin img {
  float: right;
  max-width: 80%;
}
.slidertext {
  float: left;
  margin-top:-30px;
}
.slidertext p:nth-child(1) {
  font-size: 45px;
  padding-bottom: 0;
  color: #eee;
  font-weight: 300;
  letter-spacing: -1px;
}

.slidertext p:nth-child(2) {
  font-size: 28px;
  line-height: 32px;
  margin-top: -30px;
  color: #eee;
}

.slidertext p:nth-child(3) {
  font-size: 68px;
  margin-top: -15px;
  color: darkorange;
  font-weight: 700;
  letter-spacing: -1px;
}
  



</style>
<!--SLIDER-->



<!--CAROUSEL-->

  
<!--CAROUSEL-->
<div class='slideshow-container'>

<div class='mySlides fade'>
 
  <div class='slider'>
<div class='sliderin'>
<div class='slidertext'>
<p>Πανελλαδικό Σωματείο<br/>
Εργατοϋπαλλήλων<br/>
Επιχείρησης<br/></p>
<p><b>ΕΛΛΗΝΙΚΕΣ ΥΠΕΡΑΓΟΡΕΣ<br/> 
ΣΚΛΑΒΕΝΙΤΗΣ</b></p>
<p>Καλώς ήρθατε</p>
</div>
<img src='https://raw.githubusercontent.com/nchorgit/ergfiles/main/ergfront.png' width='450'/>
</div>
</div>
 
</div>

<div class='mySlides fade'>
 
  <div class='pslide1 pslide'/>

</div>

<div class='mySlides fade'>
   <div class='pslide2 pslide'/>
</div>

<div class='mySlides fade'>
   <div class='pslide3 pslide'/>
</div>

<a class='prev' onclick='plusSlides(-1)'>&#8249;</a>
<a class='next' onclick='plusSlides(1)'>&#8250;</a>

</div>


<div style='text-align:center; margin-top:10px;'>
  <span class='dot' onclick='currentSlide(1)'/> 
  <span class='dot' onclick='currentSlide(2)'/> 
  <span class='dot' onclick='currentSlide(3)'/> 
  <span class='dot' onclick='currentSlide(4)'/> 
</div>
<div class='slider2'> 
<div class='slider'>
<div class='sliderin'>
<div class='slidertext'>
<p>Πανελλαδικό Σωματείο<br/>
Εργατοϋπαλλήλων<br/>
Επιχείρησης<br/></p>
<p><b>ΕΛΛΗΝΙΚΕΣ ΥΠΕΡΑΓΟΡΕΣ<br/> 
ΣΚΛΑΒΕΝΙΤΗΣ</b></p>
<p>Καλώς ήρθατε</p>
</div>
<img src='https://raw.githubusercontent.com/nchorgit/ergfiles/main/ergfront.png' width='450'/>
</div>
</div>
  </div>
<!--recent-->
<div class='frecent'><i class='far fa-clone'/>Τελευταίες αναρτήσεις</div>
<!--recent--> 
<div class='blogcontent'>

<div class='rightcol'>
<b:section class='sidebar' id='sidebar' preferred='yes' showaddelement='yes'>
  <b:widget id='HTML5' locked='false' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;script type=&quot;text/javascript&quot; &gt;
/*********************************************** 
* Scroll To Top Control script- &amp;#169; Dynamic Drive DHTML code library (www.dynamicdrive.com) 
* Modified by www.MyBloggerTricks.com 
* This notice MUST stay intact for legal use 
* Visit Project Page at http://www.dynamicdrive.com for full source code 
***********************************************/
var scrolltotop={ 
    //startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control 
    //scrollto: Keyword (Integer, or &quot;Scroll_to_Element_ID&quot;). How far to scroll document up when control is clicked on (0=top). 
    setting: {startline:100, scrollto: 0, scrollduration:500, fadeduration:[500, 100]}, 
    controlHTML: &#39;&lt;img src=&quot;https://raw.githubusercontent.com/nchorgit/ergfiles/main/TOTOP.svg&quot; style=&quot;width:36px; height:36px; transition: all .3s;&quot;&gt;&#39;, //HTML for control, which is auto wrapped in DIV w/ ID=&quot;topcontrol&quot; 
    controlattrs: {offsetx:20, offsety:20}, //offset of control relative to right/ bottom of window corner 
    anchorkeyword: &#39;#top&#39;, //Enter href value of HTML anchors on the page that should also act as &quot;Scroll Up&quot; links
    state: {isvisible:false, shouldvisible:false},
    scrollup:function(){ 
        if (!this.cssfixedsupport) //if control is positioned using JavaScript 
            this.$control.css({opacity:0}) //hide control immediately after clicking it 
        var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto) 
        if (typeof dest==&quot;string&quot; &amp;&amp; jQuery(&#39;#&#39;+dest).length==1) //check element set by string exists 
            dest=jQuery(&#39;#&#39;+dest).offset().top 
        else 
            dest=0 
        this.$body.animate({scrollTop: dest}, this.setting.scrollduration); 
    },
    keepfixed:function(){ 
        var $window=jQuery(window) 
        var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx 
        var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety 
        this.$control.css({left:controlx+&#39;px&#39;, top:controly+&#39;px&#39;}) 
    },
    togglecontrol:function(){ 
        var scrolltop=jQuery(window).scrollTop() 
        if (!this.cssfixedsupport) 
            this.keepfixed() 
        this.state.shouldvisible=(scrolltop&gt;=this.setting.startline)? true : false 
        if (this.state.shouldvisible &amp;&amp; !this.state.isvisible){ 
            this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0]) 
            this.state.isvisible=true 
        } 
        else if (this.state.shouldvisible==false &amp;&amp; this.state.isvisible){ 
            this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1]) 
            this.state.isvisible=false 
        } 
    }, 
    
    init:function(){ 
        jQuery(document).ready(function($){ 
            var mainobj=scrolltotop 
            var iebrws=document.all 
            mainobj.cssfixedsupport=!iebrws || iebrws &amp;&amp; document.compatMode==&quot;CSS1Compat&quot; &amp;&amp; window.XMLHttpRequest //not IE or IE7+ browsers in standards mode 
            mainobj.$body=(window.opera)? (document.compatMode==&quot;CSS1Compat&quot;? $(&#39;html&#39;) : $(&#39;body&#39;)) : $(&#39;html,body&#39;) 
            mainobj.$control=$(&#39;&lt;div id=&quot;topcontrol&quot;&gt;&#39;+mainobj.controlHTML+&#39;&lt;/div&gt;&#39;) 
                .css({position:mainobj.cssfixedsupport? &#39;fixed&#39; : &#39;absolute&#39;, bottom:mainobj.controlattrs.offsety, right:mainobj.controlattrs.offsetx, opacity:0, cursor:&#39;pointer&#39;}) 
                .attr({title:&#39;Scroll Back to Top&#39;}) 
                .click(function(){mainobj.scrollup(); return false}) 
                .appendTo(&#39;body&#39;) 
            if (document.all &amp;&amp; !window.XMLHttpRequest &amp;&amp; mainobj.$control.text()!=&#39;&#39;) //loose check for IE6 and below, plus whether control contains any text 
                mainobj.$control.css({width:mainobj.$control.width()}) //IE6- seems to require an explicit width on a DIV containing text 
            mainobj.togglecontrol() 
            $(&#39;a[href=&quot;&#39; + mainobj.anchorkeyword +&#39;&quot;]&#39;).click(function(){ 
                mainobj.scrollup() 
                return false 
            }) 
            $(window).bind(&#39;scroll resize&#39;, function(e){ 
                mainobj.togglecontrol() 
            }) 
        }) 
    } 
}
scrolltotop.init()
&lt;/script&gt;

&lt;style&gt;
#topcontrol {position:absolute; z-index:15000;}
#topcontrol:hover {filter: grayscale(100%);  transition: all .3s;}
&lt;/style&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='HTML6' locked='false' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;style&gt;

.slideshow-container {
    max-width: 100%;
    position: relative;
    margin: auto;
overflow:hidden;
height:495px;
}

.mySlides {
    display: none;

  border: solid 0px black;
     
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: #ccc;
    font-weight: bold;
    font-size: 60px;
    transition: .6s ease;
    border-radius:50%
}
.next {
    right:50px;
    border-radius: 3px 3px 3px 3px
}

.prev {
    left: 50px;
    border-radius: 3px 3px 3px 3px
}

.prev:hover,
.next:hover {
    color: #f2f2f2;
    background-color: rgba(0, 0, 0, 0.8)
}

.text {
    color: #f2f2f2;
    font-size: 15px;
    padding-top: 12px;
  padding-bottom: 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: #222428
}

.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0
}

.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color .6s ease
}

.active,
.dot:hover {
    background-color: #717171
}
/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: .5s;
  animation-name: fade;
  animation-duration: .5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
&lt;/style&gt;

&lt;script&gt;
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener(&quot;load&quot;,function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 6000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName(&#39;slideshow-inner&#39;)[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName(&#39;slideshow-container&#39;)[0];
  
    slideshowContainer.addEventListener(&#39;mouseenter&#39;, pause)
    slideshowContainer.addEventListener(&#39;mouseleave&#39;, resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n &lt; 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 6000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 2)}, 6000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 2)}, 10000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName(&quot;mySlides&quot;);
  var dots = document.getElementsByClassName(&quot;dot&quot;);
  if (n &gt; slides.length) {slideIndex = 1}
  if (n &lt; 1) {slideIndex = slides.length}
  for (i = 0; i &lt; slides.length; i++) {
      slides[i].style.display = &quot;none&quot;;
  }
  for (i = 0; i &lt; dots.length; i++) {
      dots[i].className = dots[i].className.replace(&quot; active&quot;, &quot;&quot;);
  }
  slides[slideIndex-1].style.display = &quot;block&quot;;
  dots[slideIndex-1].className += &quot; active&quot;;
}

pause = () =&gt; {
  clearInterval(myTimer);
}

resume = () =&gt;{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}
&lt;/script&gt;

&lt;script&gt;
$(&quot;.pslide1&quot;).load(&quot;https://www.erg-sklavenitis.gr/?&amp;max-results=1 .blog-posts .post-outer:nth-child(1)&quot;);
$(&quot;.pslide2&quot;).load(&quot;https://www.erg-sklavenitis.gr/?&amp;max-results=1 .blog-posts .post-outer:nth-child(2)&quot;);
$(&quot;.pslide3&quot;).load(&quot;https://www.erg-sklavenitis.gr/?&amp;max-results=1 .blog-posts .post-outer:nth-child(3)&quot;);
$(&#39;table&#39;).wrap(&#39;&lt;div&gt;&lt;/div&gt;&#39;);
&lt;/script&gt;

&lt;script&gt;
var tbl = document.getElementById(&#39;table&#39;); 
var parent = tbl.parentNode;
var wrapper = document.createElement(&#39;div&#39;);
wrapper.style.overflowX=&quot;scroll&quot;; 
wrapper.appendChild(tbl);
parent.appendChild(wrapper);
&lt;/script&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='HTML3' locked='false' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;h2 style=&quot;border-radius:4px 4px 0 0;&quot;&gt;&lt;i style=&quot;padding:12px 10px;&quot; class=&quot;fas fa-users&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;&lt;span&gt;Ποιοί είμαστε&lt;/span&gt;&lt;/h2&gt;
&lt;div class=&quot;peim&quot;&gt;
&lt;p&gt;&lt;a href=&quot;https://www.erg-sklavenitis.gr/p/about.html&quot;&gt;Περισσότερα&#187;&lt;/a&gt;&lt;/p&gt;
&lt;img src=&quot;https://raw.githubusercontent.com/nchorgit/ergfiles/main/ergfront.png&quot;/&gt;

&lt;/div&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='HTML2' locked='false' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;style&gt;
.peim {
    background:#ffd6ce;
    padding: 15px;
    text-align: center;
margin-bottom:15px;
border-radius: 0 0 4px 4px;
}
.peim img {
  width: 80%;
  margin-bottom: -19px;
margin-top:15px;

}

.peim p a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 15px;
  background: #009688;
  border-radius: 3px;
  font-weight: bold;
}

.peim p a:hover {
  background: #444;
}
.sidebar h2 i {
    margin-right: 8px;
    font-size: 18px;
    background: tomato;
    padding: 12px;
    border-radius: 4px 0 0;
    color: #fff;
    position: absolute;
    width: 33px;
    height: 33px;
    left: 0;
    top: 0;
    text-align: center;
    line-height: 33px;
}

.sidebar span {
    margin-left: 55px;
}

.pload {
    padding: 0px;
    background: transparent;
    border-radius: 0 0 4px 4px;
    margin-bottom: 15px;
}

.pload .post-footer-line.post-footer-line-1 {
    display: none;
}

.pload br {
    display: none;
}

.pload .blog-posts .post-outer:nth-child(5) .post {
border:0;
border-radius: 0 0 4px 4px;
}

.pload .post-outer:nth-child(n+6) {
    display: none;   
}

.pload .post {
    background: #333;
    position: relative;
    padding: 0;
    margin: 0px 0px 0px 0px;
    border-bottom: 1px solid #555;
    height: 100px;
    border-radius: 0px;
}
.pload .post img {
    position: absolute;
    width: 80px;
    height: 80px;
    object-fit: cover;
    top: 10px;
    left: 10px;
    border-radius: 2px;
}

.pload h3.post-title {
    margin: 0;
    height: 95px;
    border-bottom: 0;
    padding: 0;
    width: 65%;
    position: relative;
    left: 105px;
    line-height: 21px;
    display: flex;
    align-items: center;
}

.pload h3.post-title a {
    color: #ccc;
    letter-spacing: -.2px;
    font-size: 16px;
}

.pload h3.post-title a:hover {
    font-size: 16px;
    color: #fff;
}

.pload .jump-link a {
    font-size: 10px;
    position: relative;
    bottom: 50px;
    left: 100px;
    padding: 4px 7px;
    background: #555555;
    border-radius: 2px;
    color: white;
    font-weight: 500;
display: none;
}

.pload h2 {display:none;}
.pload .date {
    margin: -30px auto auto 105px;
    font-size: 12px;
    position: relative;
    padding: 0px 0px 0px 0px;
    background: transparent;
    font-weight: 500;
    border-left: none;
    border-radius: 4px;
    border-bottom: 0;
    color: #f08900;
letter-spacing: 0;
        display:none;
}

.pload .date span::before {
   
    margin: 0;
    left: 10px;
    top: 12px;
    filter: brightness(5) contrast(.4);
    content: url(https://raw.githubusercontent.com/nchorgit/ergfiles/main/DATE.svg);
    width: 12px;
    height: 10px;
    position: absolute;
    display: none;
}

.pload .post-labels a {
    padding: 5px 7px;
    font-size: 11px;
    position: relative;
    bottom: 28.5px;
    right: 17px;
    background: #383838;
    color: white;
    border-radius: 2px;
    font-weight: 700;
    float: right;
    margin-left: 5px;
display:none;
}

.pload .post-body {
    font-size: 0;
    padding: 0;
    margin: 0;
    
}

.pload .post-footer-line.post-footer-line-2 {
    background: transparent;
    margin: 0;
    padding: 0;
    border: 0;
    display: none;
}


&lt;/style&gt;


&lt;h2 style=&quot;border-radius:4px 4px 0 0;&quot;&gt;&lt;i class=&quot;far fa-clone&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;&lt;span&gt;Τελευταίες αναρτήσεις&lt;/span&gt;&lt;/h2&gt;
&lt;div class=&quot;pload&quot;&gt;
&lt;/div&gt;
&lt;script&gt;
$(&quot;.pload&quot;).load(&quot;https://www.erg-sklavenitis.gr/?&amp;max-results=4 .blog-posts.hfeed&quot;);
&lt;/script&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='HTML4' locked='false' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;div class=&quot;scon&quot;&gt;
  &lt;p&gt;Επικοινωνήστε μαζί μας&lt;/p&gt;
&lt;img src=&quot;https://raw.githubusercontent.com/nchorgit/ergfiles/main/CONTACT.svg&quot;/&gt;
&lt;p&gt;&lt;a href=&quot;https://www.erg-sklavenitis.gr/p/contact.html&quot;&gt;Περισσότερα&#187;&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;

&lt;style&gt;
.scon {
    background:#10223d;
    padding: 1px 50px 15px 50px;
    text-align: center;
border-radius:4px;
}
.scon img {
  width: 60%;
  margin-bottom: 0px;

}
.scon p {
  color:#eee;
  font-size: 28px;
}
.scon p a {
  color:#10223d;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 15px;
  background: #eee;
  border-radius: 3px;
  font-weight: bold;

}
.scon p a:hover {
  background: tomato;
  color:#fff
}
&lt;/style&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
</b:section>
</div>
<div class='leftcol'>
<b:section class='main' id='main' preferred='yes' showaddelement='no'>
  <b:widget id='Blog1' locked='true' title='Αναρτήσεις ιστολογίου' type='Blog' version='1'>
    <b:widget-settings>
      <b:widget-setting name='showDateHeader'>true</b:widget-setting>
      <b:widget-setting name='style.textcolor'>#000000</b:widget-setting>
      <b:widget-setting name='showShareButtons'>false</b:widget-setting>
      <b:widget-setting name='authorLabel'>By</b:widget-setting>
      <b:widget-setting name='showCommentLink'>false</b:widget-setting>
      <b:widget-setting name='style.urlcolor'>#008000</b:widget-setting>
      <b:widget-setting name='showAuthor'>false</b:widget-setting>
      <b:widget-setting name='disableGooglePlusShare'>true</b:widget-setting>
      <b:widget-setting name='style.linkcolor'>#0000ff</b:widget-setting>
      <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
      <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
      <b:widget-setting name='timestampLabel'>Πρώτη δημοσίευση</b:widget-setting>
      <b:widget-setting name='reactionsLabel'/>
      <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
      <b:widget-setting name='style.layout'>1x1</b:widget-setting>
      <b:widget-setting name='showLabels'>true</b:widget-setting>
      <b:widget-setting name='showLocation'>false</b:widget-setting>
      <b:widget-setting name='showTimestamp'>false</b:widget-setting>
      <b:widget-setting name='postsPerAd'>1</b:widget-setting>
      <b:widget-setting name='showBacklinks'>false</b:widget-setting>
      <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
      <b:widget-setting name='showInlineAds'>false</b:widget-setting>
      <b:widget-setting name='showReactions'>false</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main' var='top'>
  <b:if cond='!data:mobile'>
    <!-- posts -->
 <b:include data='top' name='status-message'/>
    <div class='blog-posts hfeed'>

<b:if cond='data:blog.homepageUrl == data:blog.url'>
<!-- No breadcrumb on home page -->
<b:else/>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<!-- breadcrumb for the post page -->
<ul id='breadcrumbs-bbeginner'>
<li><a expr:href='data:blog.homepageUrl' rel='tag'><i class='fas fa-home'/></a></li>
<b:loop values='data:posts' var='post'>
<b:if cond='data:post.labels'>
<b:loop values='data:post.labels' var='label'>
<b:if cond='data:label.isLast == &quot;true&quot;'>
<li><a expr:href='data:label.url' rel='tag'><i class='far fa-clone' style='margin-right:8px;'/><b><data:label.name/></b></a></li>
</b:if>
</b:loop>
<b:else/>
</b:if><li><a class='current1'><data:post.title/></a></li>
</b:loop>
</ul>
<b:else/>
</b:if></b:if>

      <b:loop values='data:posts' var='post'>
  
        <div class='post-outer'>
          <!-- Go to www.addthis.com/dashboard to customize your tools  <script src='//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ed4433a591bfe28' type='text/javascript'/>-->
          <b:include data='post' name='post'/>
          <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
        </div>

        <!-- Ad -->
        <b:if cond='data:post.includeAd'>
          <div class='inline-ad'>
            <data:adCode/>
          </div>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
    </div>

    <!-- navigation -->
    <b:include name='nextprev'/>

    <!-- feed links -->
    <b:include name='feedLinks'/>

  <b:else/>
    <b:include name='mobile-main'/>
  </b:if>

  <b:include cond='data:top.showPlusOne' name='googlePlusBootstrap'/>
</b:includable>
    <b:includable id='backlinkDeleteIcon' var='backlink'/>
    <b:includable id='backlinks' var='post'/>
    <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
    <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
      </a>
    </b:if>
  </span>
</b:includable>
    <b:includable id='comment_count_picker' var='post'>
  <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
    <data:post.commentLabelFull/>:
  </a>
</b:includable>
    <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.showThreadedComments'>
    <b:include data='post' name='threaded_comments'/>
  <b:else/>
    <b:include data='post' name='comments'/>
  </b:if>
</b:includable>
    <b:includable id='comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <b:if cond='data:post.allowComments'>
      <h4><data:post.commentLabelFull/>:</h4>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <b:if cond='data:post.hasOlderLinks'>
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
              &#160;
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
              &#160;
          </b:if>

          <data:post.commentRangeText/>

          <b:if cond='data:post.hasNewerLinks'>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
          </b:if>
        </span>
      </b:if>

      <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
        <dl expr:class='data:post.avatarIndentClass' id='comments-block'>
          <b:loop values='data:post.comments' var='comment'>
            <dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
              <b:if cond='data:comment.favicon'>
                <img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
              </b:if>
              <a expr:name='data:comment.anchorName'/>
              <b:if cond='data:blog.enabledCommentProfileImages'>
                <data:comment.authorAvatarImage/>
              </b:if>
              <b:if cond='data:comment.authorUrl'>
                <a expr:href='data:comment.authorUrl' rel='nofollow'><data:comment.author/></a>
              <b:else/>
                <data:comment.author/>
              </b:if>
              <data:commentPostedByMsg/>
            </dt>
            <dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
              <b:if cond='data:comment.isDeleted'>
                <span class='deleted-comment'><data:comment.body/></span>
              <b:else/>
                <p>
                  <data:comment.body/>
                </p>
              </b:if>
            </dd>
            <dd class='comment-footer'>
              <span class='comment-timestamp'>
                <a expr:href='data:comment.url' title='comment permalink'>
                  <data:comment.timestamp/>
                </a>
                <b:include data='comment' name='commentDeleteIcon'/>
              </span>
            </dd>
          </b:loop>
        </dl>
      </div>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
            <data:post.oldestLinkText/>
          </a>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
            <data:post.olderLinkText/>
          </a>
          &#160;
          <data:post.commentRangeText/>
          &#160;
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
            <data:post.newerLinkText/>
          </a>
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
            <data:post.newestLinkText/>
          </a>
        </span>
      </b:if>

      <p class='comment-footer'>
        <b:if cond='data:post.embedCommentForm'>
          <b:if cond='data:post.allowNewComments'>
            <b:include data='post' name='comment-form'/>
          <b:else/>
            <data:post.noNewCommentsText/>
          </b:if>
        <b:elseif cond='data:post.allowComments'/>
          <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
        </b:if>
      </p>
    </b:if>
    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

  </div>
</b:includable>
    <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      <div class='blog-feeds'>
        <b:include data='feedLinks' name='feedLinksBody'/>
      </div>
    </b:if>

  <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:include cond='data:post.allowComments and data:post.feedLinks' data='post.feedLinks' name='feedLinksBody'/>
      </b:loop>
    </div>
  </b:if>
</b:includable>
    <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:feedLinksMsg/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
    <b:includable id='iframe_comments' var='post'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
    <b:includable id='mobile-index-post' var='post'>
  <div class='mobile-date-outer date-outer'>
    <b:if cond='data:post.dateHeader'>
      <div class='date-header'>
        <span><data:post.dateHeader/></span>
      </div>
    </b:if>

    <div class='mobile-post-outer'>
      <a expr:href='data:post.url'>
        <h3 class='mobile-index-title entry-title' itemprop='name'>
          <data:post.title/>
        </h3>

        <div class='mobile-index-arrow'>&amp;rsaquo;</div>

        <div class='mobile-index-contents'>
          <b:if cond='data:post.thumbnailUrl'>
            <div class='mobile-index-thumbnail'>
              <div class='Image'>
                <img expr:src='data:post.thumbnailUrl'/>
              </div>
            </div>
          </b:if>

          <div class='post-body'>
            <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
          </div>
        </div>

        <div style='clear: both;'/>
      </a>

      <div class='mobile-index-comment'>
        <b:include cond='data:blog.pageType != &quot;static_page&quot;                          and data:post.allowComments                          and data:post.numComments != 0' data='post' name='comment_count_picker'/>
      </div>
    </div>
  </div>
</b:includable>
    <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
    <b:includable id='mobile-nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <div class='mobile-link-button' id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&amp;lsaquo;</a>
      </div>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <div class='mobile-link-button' id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>&amp;rsaquo;</a>
      </div>
    </b:if>

    <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
    </div>

    <div class='mobile-desktop-link'>
      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
    </div>

  </div>
  <div class='clear'/>
</b:includable>
    <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <!--<h2 class='date-header'><span><data:post.dateHeader/></span></h2>-->
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
          <b:if cond='data:post.thumbnailUrl'>
            <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
          </b:if>
          <meta expr:content='data:blog.blogId' itemprop='blogId'/>
          <meta expr:content='data:post.id' itemprop='postId'/>

          <a expr:name='data:post.id'/>
         

          <div class='post-header'>
            <div class='post-header-line-1'/>
           
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
             <b:if cond='data:post.title'>
            <h3 class='post-title entry-title' itemprop='name'>
              <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
              <b:elseif cond='data:post.url and data:blog.url != data:post.url'/>
                <a expr:href='data:post.url'><data:post.title/></a>
              <b:else/>
                <data:post.title/>
              </b:if>
            </h3>
          </b:if>
            <data:post.body/>
            <div style='clear: both;'/> <!-- clear for photos floats -->
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <span itemprop='name'><data:post.author/></span>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <span itemprop='name'><data:post.author/></span>
                    </span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <meta expr:content='data:post.url.canonical' itemprop='url'/>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                                  and data:post.allowComments' data='post' name='comment_count_picker'/>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
      </div>
    </div>
  </div>
</b:includable>
    <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
                            <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>
                              &#8249;
                            </a>
                          </span>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
                            <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>
                              &#8250;
                            </a>
                          </span>
   <div id='homeb2'><a href='http://tachortata.blogspot.gr/'>Αρχική</a></div>
<div id='prevgr'>&#8249;</div>
<div id='nextgr'>&#8250;</div>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clear'/>
</b:includable>
    <b:includable id='post' var='post'>
  <div class='post hentry uncustomized-post-template' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
    <b:if cond='data:post.firstImageUrl'>
      <meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
    </b:if>
    <meta expr:content='data:blog.blogId' itemprop='blogId'/>
    <meta expr:content='data:post.id' itemprop='postId'/>

    <a expr:name='data:post.id'/>
    

    <!-- Then use the post body as the schema.org description, for good G+/FB snippeting. -->
    <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &quot;&quot; : &quot;description &quot;) + &quot;articleBody&quot;'>
      <b:if cond='data:post.title'>
      <h3 class='post-title entry-title' itemprop='name'>
      <b:if cond='data:post.link or (data:post.url and data:blog.url != data:post.url)'>
        <a expr:href='data:post.link ? data:post.link : data:post.url'><data:post.title/></a>
      <b:else/>
        <data:post.title/>
      </b:if>
      </h3>
    </b:if>

    <div class='post-header'>
    <div class='post-header-line-1'/>
      
    
      
      
       <b:if cond='data:post.dateHeader'>
  <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
</b:if>
<b:if cond='data:post.isDateStart'>
  <div class='date-posts'/>
</b:if>     
    </div>
      <data:post.body/>
      <div style='clear: both;'/> <!-- clear for photos floats -->
    </div>

    <b:if cond='data:post.hasJumpLink'>
      <div class='jump-link'>
        <a expr:href='data:post.url + &quot;#more&quot;' expr:title='data:post.title'><data:post.jumpText/></a>
      </div>
    </b:if>

    <div class='post-footer'>
    <div class='post-footer-line post-footer-line-1'>
      <span class='post-author vcard'>
        <b:if cond='data:top.showAuthor'>
          <data:top.authorLabel/>
            <b:if cond='data:post.authorProfileUrl'>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                <a class='g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                  <span itemprop='name'><data:post.author/></span>
                </a>
              </span>
            <b:else/>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <span itemprop='name'><data:post.author/></span>
              </span>
            </b:if>
        </b:if>
      </span>

      <span class='post-timestamp'>
        <b:if cond='data:top.showTimestamp'>
          <data:top.timestampLabel/>
          <b:if cond='data:post.url'>
            <meta expr:content='data:post.url.canonical' itemprop='url'/>
            <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
          </b:if>
        </b:if>
      </span>

      <span class='reaction-buttons'>
        <b:if cond='data:top.showReactions'>
          <table border='0' cellpadding='0' cellspacing='0' width='100%'><tr>
            <td class='reactions-label-cell' nowrap='nowrap' valign='top' width='1%'>
              <span class='reactions-label'>
              <data:top.reactionsLabel/></span>&#160;</td>
            <td><iframe allowtransparency='true' class='reactions-iframe' expr:src='data:post.reactionsUrl' frameborder='0' name='reactions' scrolling='no'/></td>
           </tr></table>
        </b:if>
      </span>

      <span class='post-comment-link'>
        <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                          and data:post.allowComments' data='post' name='comment_count_picker'/>
      </span>

       <!-- backlinks -->
       <span class='post-backlinks post-comment-link'>
         <b:if cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                      and data:post.showBacklinks'>
           <a class='comment-link' contenteditable='true' data-placeholder='Σχόλια' expr:href='data:post.url + &quot;#links&quot;'><data:top.backlinkLabel/></a>
         </b:if>
       </span>

      <span class='post-icons'>
        <!-- email post links -->
        <b:if cond='data:post.emailPostUrl'>
          <span class='item-action'>
          <a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'>
            <img alt='' class='icon-action' height='13' src='https://resources.blogblog.com/img/icon18_email.gif' width='18'/>
          </a>
          </span>
        </b:if>

        <!-- quickedit pencil -->
        <b:include data='post' name='postQuickEdit'/>
      </span>

      <!-- share buttons -->
      <div class='post-share-buttons goog-inline-block'>
        <b:include cond='data:post.sharePostUrl' data='post' name='shareButtons'/>
      </div>

      </div>

      <div class='post-footer-line post-footer-line-2'>
      <span class='post-labels'>
        <b:if cond='data:top.showPostLabels and data:post.labels'>
          
          <b:loop values='data:post.labels' var='label'>
            <a expr:href='data:label.url + &quot;?&amp;max-results=8&quot;' rel='tag'><data:label.name/></a><b:if cond='not data:label.isLast'/>
          </b:loop>
        </b:if>
      </span>
      </div>

      <div class='post-footer-line post-footer-line-3'>
      <span class='post-location'>
        <b:if cond='data:top.showLocation and data:post.location'>
          <data:postLocationLabel/>
          <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
        </b:if>
      </span>
      </div>
      <b:if cond='data:post.authorAboutMe'>
        <div class='author-profile' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
          <b:if cond='data:post.authorPhoto.url'>
            <img expr:src='data:post.authorPhoto.url' itemprop='image' width='50px'/>
          </b:if>
          <div>
            <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'>
              <span itemprop='name'><data:post.author/></span>
            </a>
          </div>
          <span itemprop='description'><data:post.authorAboutMe/></span>
        </div>
      </b:if>
    </div>
  </div>
</b:includable>
    <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='https://resources.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
    <b:includable id='shareButtons' var='post'>
  <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showPinterestButton'><a class='goog-inline-block share-button sb-pinterest' expr:href='data:post.sharePostUrl + &quot;&amp;target=pinterest&quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToPinterestMsg/></span></a></b:if><b:if cond='data:top.showPlusOne'><div class='goog-inline-block google-plus-share-container'><data:post.googlePlusShareTag/></div></b:if>
</b:includable>
    <b:includable id='status-message'>
<b:if cond='data:navMessage'>
<div class='navmessage'>
     
  <b:if cond='data:numPosts == 0'>
    <b:if cond='data:blog.searchLabel'>
        <i class='fas fa-times-circle' style='background: #dc0202;'/>Δεν βρέθηκαν αναρτήσεις στην κατηγορία: <b><data:blog.searchLabel/></b>
    <b:elseif cond='data:blog.searchQuery'/>
        <i class='fas fa-times-circle' style='background: #dc0202;'/>Δεν βρέθηκαν αποτελέσματα στην αναζήτηση: <b><data:blog.searchQuery/></b>
    <b:elseif cond='data:blog.pageType == &quot;error_page&quot;'/>
      <style>.navmessage {top: -84px;} .navmessage i {background: #dc0202;} body {overflow-x: hidden;}</style>
        <i class='fas fa-times-circle'/>Η σελίδα δεν βρέθηκε
    <b:elseif cond='data:blog.url == data:blog.homepageUrl'/>
        No posts.
    </b:if>
<b:else/>
    <b:if cond='data:blog.searchLabel'>
      <i class='far fa-clone'/>Αναρτήσεις στην κατηγορία: <b><data:blog.searchLabel/></b>
    <b:elseif cond='data:blog.searchQuery'/>
        <i class='fas fa-search-plus'/>Αποτελέσματα στην αναζήτηση: <b><data:blog.searchQuery/></b>
    </b:if>
</b:if>
</div>
 <div style='clear: both;'/>
</b:if>
</b:includable>
    <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
    <b:includable id='threaded_comment_js' var='post'>
  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var config = <data:post.commentConfig/>;

// <![CDATA[
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        var text = (entry &&
                    ((entry.content && entry.content.$t) ||
                     (entry.summary && entry.summary.$t))) ||
            '';
        if (entry && entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + text + '</span>';
            }
          }
        }
        return text;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                  comment.displayTime = entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=8';
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == config.authorName
              && comment.author.profileUrl == config.authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return config.baseUri + '/delete-comment.g?blogID='
               + config.blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          replybox.src = '';
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      // Configure commenting API:
      var configJso = {
        'maxDepth': config.maxThreadDepth
      };
      var provider = {
        'id': config.postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
    <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <h4><data:post.commentLabelFull/>:</h4>

    <div class='comments-content'>
      <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
    </div>
    </div>
  </div>
</b:includable>
  </b:widget>
</b:section>
</div><!-- end mLeft div -->


<div class='clear'/>
</div>

<footer class='footer'>
 <div class='tfooter'>
<div class='tfooterm'>
<a href='https://www.erg-sklavenitis.gr/p/contact.html'>Επικοινωνία</a> 
<a href='https://www.erg-sklavenitis.gr/p/terms-privacy.html#termsuse'>Όροι χρήσης</a>  
<a href='https://www.erg-sklavenitis.gr/p/terms-privacy.html#privacy'>Πολιτική Απορρήτου</a>  
<a href='https://www.erg-sklavenitis.gr/p/terms-privacy.html#cookies'>Cookies</a>  
</div>
</div>
<div class='tfooter2'>
<div class='tfooterm2'>
  <span style='font-family:arial'>&#169;</span> 2021 Πανελλαδικό Σωματείο Εργατοϋπαλλήλων Επιχείρησης ΕΛΛΗΝΙΚΕΣ ΥΠΕΡΑΓΟΡΕΣ ΣΚΛΑΒΕΝΙΤΗΣ
</div>
</div> 
  </footer>
</div>

<script>


$(function(){
  $(&quot;.dropbtn1&quot;).click(function(){
    $(&quot;.dcontent1&quot;).slideToggle(&quot;slow&quot;);
  });
});

$(function(){
    $(&quot;.dropbtn2&quot;).click(function () {
        $(&quot;.dcontent2&quot;).slideToggle (&quot;slow&quot;);
    });
});
$(function(){
    $(&quot;.search&quot;).click(function () {
        $(&quot;.searchin&quot;).slideToggle (&quot;slow&quot;);
    });
});
$(function(){
    $(&quot;.hampm&quot;).click(function () {
        $(&quot;.smenu&quot;).slideToggle (&quot;slow&quot;);
    });
});


</script>
 <script type='text/javascript'> $( &quot;table&quot; ).wrap( &quot;<div class='tabtout'/>&quot; );</script>
 <script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + &#39;px&#39;;
  }
</script>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<style>
.rightcol {
 display:none;
}
.slideshow-container, .frecent, .slider2 {display:none;}
</style>
</b:if>
<b:if cond='data:numPosts == 0'>
<style>
.navmessage i {
background: #dc0202 !important;
}
  </style>
</b:if>
<b:if cond='data:blog.searchLabel || data:blog.searchQuery'>
<style>
.blog-posts.hfeed {margin-top:0;}
  .slider2 {display:none;}
  .frecent {
 display:none !important;
}
</style></b:if>
 <b:if cond='data:blog.pageType == &quot;index&quot;'>
<style>
 .blog-posts.hfeed {margin-top:0;}
  .slider2 {display:none;}
   .frecent {
    padding: 15px;
    text-align: center;
    margin-bottom: 30px;
    background: #ff8c00;
    font-size: 19px;
    color: #fff;
    border-left: 0px solid #972385;
    border-right: 0px solid #f9c500;
    position: relative;
    display:block;
    top: 46px;


}
   </style>
</b:if>
<b:if cond='data:blog.searchLabel || data:blog.url == data:blog.homepageUrl || data:blog.searchQuery || data:blog.pageType == &quot;index&quot;'>
<script type='text/javascript'>//<![CDATA[
$('.post-body').each(function () {   
    $(this).click(function () {
        document.location = $('h3 a', this).attr('href');
		return false;        
    });
});
//]]>
</script>

<style>
.slideshow-container {display:none;}
body {overflow-x: hidden;}
.rightcol {
display:none;
}

html {
  scroll-behavior: smooth;
}
.leftcol {
width:100%;
float:none;
}
.sbold {margin-right:5px;}
.post {
    padding: 15px;
    background: #fff;
    border-radius: 4px;
}
  
.blog-posts.hfeed {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat( auto-fit, minmax(313px, 1fr) );
 
}

h3.post-title a {
    font-size: 19px;
    color: #555555;
  line-height: 23px;
  letter-spacing:-.4px;
}

.post-body h2 {
    display: none;
}
  

h3.post-title a:hover {
    font-size: 19px;
    color: #853e3e;
}

h3.post-title {
    padding: 15px;
    margin: -45px -15px 30px -15px;
    background: #fff;
    border-bottom: 2px solid #eeeeee;
    font-size: 28px;
    letter-spacing: 0px;
    color: #444;
    height: 70px;
    display: flex;
    align-content: center;
    align-items: center;
     border-radius: 4px 4px 0 0;
}

.date {
    margin: -15px 0 15px 0;
    background: #f1f1f1;
    font-size: 13px;
    padding: 10px 20px;
    font-weight: normal;
    border-left: 2px solid #ccc;
    color: #444;
  display:flex;
  align-items: baseline;
}

.date span {margin-left: 15px;}

.separator a {
    width: 100%;
  margin: 0 !important;
}

.jump-link {
    margin-top: 35px;
}
.jump-link a {
    background: #47a5ad;
    text-decoration: none;
    color: white;
    padding: 7px 10px;
    border-radius: 3px;
    font-size: 13px;
    font-weight: bold;
}
.jump-link a:hover {
    background: #3e8c93;
}
.post-footer-line.post-footer-line-2 {
    background: #efddcf;
    margin: 10px -15px -15px -15px;
    padding: 18px 15px 20px 15px;
    border-top: 2px solid #f1cdb1;
    text-align: justify;
    height: auto;
    border-radius: 0 0 4px 4px;
}

.post-labels a {
    padding: 7px 10px;
    color: white;
    border-radius: 3px;
    font-size: 13px;
    font-weight: bold;
    background: tomato;
}
  
.post-labels a:hover {
background: #ff7805;
}
.post-body p {
     display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  margin:10px 0;
 }
  
.post-body {
    margin-top: 30px;
    margin-bottom: 0;
    padding: 0;
    line-height: 20px;
    color: #555555;
    font-size: 15px;
  
 
}
  .post-outer:hover {opacity:.7; cursor:pointer; transition:all .2s;}
   .post-outer {transition:all .2s;}

p img, .fimg img, .separator img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.comment-link {
 
    border-radius: 50px;
    margin-top: -23px;
    padding: 7px 20px;
    color:#333;

   
    font-size: 13px;
  
    z-index: 10;
}

.comment-link:hover {
    cursor: pointer;
    filter: hue-rotate(20deg);
}
.blogcontent {
    max-width: 1300px;
    margin: 80px auto;
  }

.navmessage {
    padding: 15px;
    text-align: center;
    margin-bottom: 30px;
    background: #ff8c00;
    font-size: 19px;
    color: #fff;
    border-left: 0px solid #972385;
    border-right: 0px solid #f9c500;
    position: relative;
    width: 100vw;
    left: 50%;
    top: -50px;
    margin-left: -50vw;

}

.navmessage a {
    display: none;
}

  .navmessage i {
    margin-right: 10px;
    font-size: 20px;
    background: #47a5ad;
    padding: 12px;
    border-radius: 50%;
    color: #eee;
}
#blog-pager-newer-link a, #blog-pager-older-link a {
margin: 0px;
}
@media only screen and (max-width: 1300px) {
.navmessage {
    margin-bottom: 60px;
    width: auto;
    top: -30px;
    left: auto;
    width: auto;
    margin: 0;
  border-radius:4px;
}
.blogcontent {
   margin: 80px auto;
}
.blog-posts.hfeed {
margin-top: -15px;
}
}

@media only screen and (max-width: 900px) {
  .navmessage i {
  display: none;
} 
}

@media only screen and (max-width:530px) {
body {
    background: #ffffff;
}
#blog-pager {
  background: #ccc;
  }
  
#blog-pager-newer-link a, #blog-pager-older-link a {
margin: 15px;
  }
.blogcontent {
    padding: 0;
    margin-bottom: -12px;
}
.navmessage {
    margin-bottom: 0px;
  top:-33px;
  border-radius:0;
}

  .fimg, .separator {
    margin: 0 -15px 1em -15px;
}

p img {margin:-15px 0;}
 
.blog-posts.hfeed {
    display: block;
 margin-top: 0px;
}

h3.post-title {
display:block;
height:auto;
line-height: 30px;

}
  
h3.post-title a {
    font-size: 24px;
    color: #555555;
}

h3.post-title a:hover {
    font-size: 24px;
    color: #853e3e;
}
.post {
    margin-bottom: 0px;
margin-top:0px;
}

.separator {
    margin: 0 -15px 15px -15px !important;
    width: auto;
    float:none !important;
}

p img, .fimg img, .separator img {
    width: 100%;
    height: auto;
    object-fit: cover;
}


.comment-link {
    white-space: nowrap;
    float: right;
    background: #fdc906;
    border-radius: 3px;
    margin-top: -30px;
    padding: 7px 20px;
    color: #333;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    z-index: 10;
}
.comment-link::after {
    content: &quot;&quot;;
    position: absolute;
    border: 15px solid;
    top: 15px;
    border-color: #fdc906 transparent transparent #fdc906;
    right: 45px;
    z-index: -1;
}
#comments {
    margin-top: 0px;
}

.date {
    margin: 30px -15px 0px -15px;
    padding: 15px 20px 15px 30px; 
    border-left: 8px solid #ccc;
  font-size:15px;

}
.
.jump-link a {
    background: #47a5ad;
    text-decoration: none;
    color: white;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
}

h3.post-title {
    border-bottom: 0px solid #dddddd;
  margin: -45px -15px -25px -15px;
}
.post-body {
    margin-top: 30px;
    margin-bottom: 0;
    padding: 0;
    line-height: 25px;
    color: #555555;
    font-size: 17px;
    display: block;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: unset;
}
.post-footer-line.post-footer-line-2 {

margin-bottom:10px;
  border-radius:0;
}
.post-body p {
display: block;
  }
  
.post-footer {
    position: relative;
}
}
</style>
</b:if>

<b:if cond='data:blog.url == data:blog.homepageUrl'>
<!--FIRST-POST-->
<script>
$(&quot;.pslide&quot;).load(&quot;https://www.erg-sklavenitis.gr/ .blog-posts .post-outer:nth-child(1)&quot;);
</script>
<style>
body {overflow-x: hidden;}
.slideshow-container {display:block;}
.slider, .pslide {
display:block;
}

.blog-posts.hfeed {margin-top:-60px;}
 .frecent {
    padding: 20px 30px 20px 15px;
    text-align: center;
    font-size: 25px;
    color: #ff5f05;
    display:none;
    font-weight: 700;
    letter-spacing: -.4px;
    margin: 0px auto -20px auto;
    background: #eee;
    border-radius: 0px;
  position:relative;
  top:0;
}

.pslide .post img {
    position: absolute;
    width: 30%;
    height: 450px;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding: 0;
}

.pslide .post-outer {
    background: linear-gradient(180deg, #271c31 335px, #1f1727 335px);
    position: relative;
    width: 100vw;
    left: 50%;
    top: 70px;
    margin-left: -50vw;
    height: 500px;
}
.pslide .post-outer:hover {opacity:1; cursor:auto;}
.pslide .post {
    background: transparent;
    border-radius: 4px 4px 8px 8px;
    position: relative;
    margin: 0 auto;
    max-width: 1260px;
    padding: 20px;
    height: 500px;
}

.pslide .post-body {
    display: block;
    padding: 30px 15px 15px 32%;
    font-size: 16px;
    line-height: 22px;
    color: #ccc;
}

.pslide h3.post-title {
    position: relative;
    
    margin: 0;
    padding: 0;
    height: auto;
    
    border: 0;
    background: transparent;
    
}

.pslide h3.post-title a {
    font-size: 41px;
    line-height: 52px;
    color: #eee;
}
.pslide .date span {color: #ccc !important;}
.pslide .date {
    padding: 25px 30px 10px 60px;
    position: absolute;
    top: 0;
    background: transparent;
    letter-spacing: 0;
    font-size: 15px;
    width: 100%;
    border-left: 0;
    margin: 0;
    border-radius: 0 4px 0 0;
    color: #ccc !important;
    border-bottom: 2px solid #73435b;
    left: 29%;
}

.pslide .jump-link {
    margin-left: 31%;
    position: absolute;
    bottom: 150px;
}

.pslide .jump-link a {
    text-decoration: none;
    color: white;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 17px;
    font-weight: bold;
    border: 2px solid #47a5ad;
    background: transparent;
}

.pslide .post-footer-line.post-footer-line-2 {
    padding: 25px 0px;
    overflow: auto;
    /* border-radius: 8px; */
    background: transparent;
    border: 0;
}

.pslide .post-labels {
    position: absolute;
    left: 45%;
    bottom: 150px;
}

.pslide .post-labels a {
    padding: 10px 20px;
    color: white;
    border-radius: 3px;
    font-size: 17px;
    font-weight: bold;
    border: 2px solid tomato;
    margin: 6px;
}


@media only screen and (max-width:1277px) {
.prev, .next {top:20%;}
.prev {left:0;}
.next {right:0;}
.slidertext {
zoom: 60%;
margin-top: 5%;
}

.sliderin img {
    float: none;

    position: absolute;
    right: 20px;
    bottom: 0;
}

.pslide .post-labels {
    position: absolute;
    left: auto;
    bottom: 150px;
    right: 25px;
}
.pslide .post-outer, .slider {
left: 0;
    margin-left: 0;
    height: 500px;
}

.pslide h3.post-title a {
    font-size: 35px;
    line-height: 45px;
    color: #eee;
}
.pslide .date {
  padding: 25px 30px 10px 57px;
}
  
}

@media only screen and (max-width:875px) {
.pslide .post img {
    height: 335px;
}

.pslide .jump-link {
    margin-left: 0;
}
}

@media only screen and (max-width:750px) {
  .frecent {display:block;}
.slideshow-container {display:none;}
.slider2 {display:block;}
.pslide .post img {
    width: 100%;
    height: 500px;
    top: 54px;
}

.pslide .date {
    left: 0;
    padding: 25px 30px 10px 40px;
}

.pslide h3.post-title {
    top: 550px;
    left: 0;
    width: auto;
}

.pslide .post-body {
    padding: 530px 15px 15px 0px;
}
.slider {
height: auto;
position: relative;
margin-top: 41px;
  }

.sliderin img {
    float: none;
    position: absolute;
    right: 20px;
    bottom: 0;
    max-width: 50%;
}
}

  
@media only screen and (max-width:530px) {
.frecent {
    padding: 15px;
    text-align: center;
    font-size: 25px;
    color: #ff5f05;
    display: block;
    font-weight: 700;
    letter-spacing: -.4px;
    margin: 0px auto -65px auto;
    background: #eee;
    border-radius: 0px;
}
.sliderin img {
    float: none;
    position: relative;
    right: auto;
    left: auto;
    bottom: 0;
    max-width: 80%;
    display: block;
    margin: 0 auto;
}
  
.slidertext {
    zoom: 65%;
    margin-top: 15%;
    text-align: center;
    float: none;
}
.slider {
    height: auto;
    position: relative;
    margin-top: 30px;
    padding: 0;
}
}
</style>
</b:if>
  


<!--POSTPAGE--> 
<b:if cond='data:blog.pageType == &quot;item&quot; '>
<style>
.slideshow-container, .slider, .frecent, .pslide, slider2 {display: none;}
.leftcol {
    width: 67.5%;
    height: 100;
    float: left;
}
.pexp {display:none;}
ul#breadcrumbs-bbeginner {
    list-style-type: none;
    display: flex;
    margin: 0 auto 2px auto;
    padding: 20px 15px;
    font-size:13px;
    width: auto;
    background: white;
    border-radius: 4px 4px 0 0;
}
  
#breadcrumbs-bbeginner li {

margin-right:7px;
}
  
#breadcrumbs-bbeginner li:nth-child(1) a {
    background: #7c6394;
    padding: 7px 10px;
}

#breadcrumbs-bbeginner li:nth-child(2) a {
    background: tomato;
    padding: 7px 15px;
}

#breadcrumbs-bbeginner li:nth-child(3) a {
    background: #ebebeb;
    padding: 7px 15px;
    color:#444;
}
#breadcrumbs-bbeginner li:nth-child(3) a:hover {
    background: #ebebeb;
    padding: 7px 15px;
    color:#444;
}

#breadcrumbs-bbeginner li a {
    color: #fff;
  border-radius:2px;
}

#breadcrumbs-bbeginner li a:hover {
    color: #fff;
  background: #444;
}
div#at4-share {
    display: block;
}
h3.post-title {
    padding: 20px 15px 30px 15px;
    margin: -40px -15px -35px;
    background: transparent;
    border-bottom: 2px solid #eeeeee;
    font-size: 28px;
    letter-spacing: 0px;
    color: #444;
  line-height:35px;
}

h3.post-title a {
    font-size: 24px;
    color: #555555;
}

h3.post-title a:hover {
    font-size: 24px;
    color: #853e3e;
}

.post h2 {
    line-height: 30px;
}
h2.date-header {
    display: none;
}
 
  
.date {
    margin: 50px 0 15px 0;
    background: #f8f8f8;
    font-size: 13px;
    padding: 8px 20px;
    font-weight: normal;
    border-left: 2px solid #ccc;
    color: #444;
  padding-left:35px
}
.date span::before {
    content: url(https://raw.githubusercontent.com/nchorgit/ergfiles/main/DATE.svg);
    width: 15px;
    height: 10px;
    position: relative;
    display: inline-block;
    margin-left: -25px;
    opacity: .7;
    filter: grayscale(1);
    top: 4px;
    margin-right: 7px;
  }
.post {
    background: #ffffff;
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 0px;
}

.post-body {
    margin-top: 30px;
    margin-bottom: 0;
    padding: 0;
    line-height: 25px;
    color: #555555;
    font-size: 16px;
  display:block;
}

p img, .fimg img, .separator img {
    width: 100%;
    height: auto;
    max-width:600px;
}
.separator a {
    float: none !important;
    margin: 0 !important;
}
.separator {text-align:left !important;}
.feed-links {
    display: none;
}

.jump-link {
    margin-top: 5px;
}

.jump-link a {
    background: #47a5ad;
    text-decoration: none;
    color: white;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
}

.jump-link a:hover {
    background: #3f9097;
}

.post-footer-line.post-footer-line-2 {
    background: #efddcf;
    margin: 5px -15px -15px -15px;
    padding: 20px 15px;
   border-top: 2px solid #f1cdb1;
}
.post-labels a {
    padding: 7px 10px;
    color: white;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    background: tomato;
} 

.post-labels a:hover {
    background: #ff7805;
}

.rightcol {
    width: 31%;
    height: autο;
    min-height: 200px;
    float: right;
    background: #eee;
    display: block;
  margin-bottom: 100px;

}

#blog-pager {
    margin: 1em 0;
    text-align: center;
    overflow: hidden;
    background: #b6b4b4;
    padding: 0px;
    margin-top: -30px;
    margin-bottom: 200px;
    border-radius: 0 0 4px 4px;
}
@media only screen and (max-width:1190px) {
.rightcol {
    display: none;
}

.blogcontent {
    margin: 50px auto;
}

#breadcrumbs-bbeginner li:nth-child(3) a {
display:none;
}
.leftcol {
    width: 100%;
    float: none;
}
#blog-pager {
margin-bottom: -70px;
} 
}

@media only screen and (max-width:786px) {
.jump-link {
    margin-top: 30px;
}
#breadcrumbs-bbeginner li a {
  font-size: 15px;
  }
}

@media only screen and (max-width:530px) {
body {
    background: #ffffff;
}
.blogcontent {
    padding: 0;
    margin-bottom: -12px;
}
.navmessage {
    margin-bottom: 0px;
}
.post {
    margin-bottom: -30px;
    margin-top: 0px;
}

.separator {
    margin: 0 -15px 15px -15px !important;
    width: auto;
    float:none !important;
}

.fimg {
    margin: 0 -15px 1em -15px;
}
.fimg img, .separator img {
    width: 100%;
    height: auto;
    object-fit: cover;
}
.comment-link {
    margin-top: -27px;
    padding: 7px 15px;
}

#comments {
    margin-top: 0px;
}

.date {
    margin: 30px -15px 0px -15px;
    padding: 15px 20px 15px 45px; 
    border-left: 8px solid #ccc;
  font-size:15px;
}

h3.post-title {
    border-bottom: 0px solid #dddddd;
  line-height: 34px;
}

.post-footer-line.post-footer-line-2 {
 
margin-bottom:10px;
}
.post-body {
font-size:17px;
line-height:25px;
}
.post-footer {
    position: relative;
}

#blog-pager {
margin-bottom: 0px;
  background: #cccccc;
} 
}

</style>
</b:if>
  <script type='text/javascript'>
/*<![CDATA[*/
var postperpage=8;
var numshowpage=4;
var upPageWord ='‹';
  var downPageWord ='›';
var bspagenavi=location.href;
var home_page="/";
/*]]>*/
</script>
<script type='text/javascript'>
//<![CDATA[
function looppagenavi(a){var e=" ";numberleft=parseInt(numshowpage/2),numberleft==numshowpage-numberleft&&(numshowpage=2*numberleft+1),start=pagenumber-numberleft,start<1&&(start=1),maximum=parseInt(a/postperpage)+1,maximum-1==a/postperpage&&(maximum-=1),end=start+numshowpage-1,end>maximum&&(end=maximum),e+="<span class='showpageOf'>ΣΕΛΙΔΑ <b>"+pagenumber+"</b> ΑΠΟ <b>"+maximum+"</b></span>";var s=parseInt(pagenumber)-1;pagenumber>1&&(e+=2==pagenumber?"page"==type?'<span class="showpage"><a href="'+home_page+'">'+upPageWord+"</a></span>":'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">'+upPageWord+"</a></span>":"page"==type?'<span class="showpageNum"><a href="#" onclick="redirectpage('+s+');return false">'+upPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+s+');return false">'+upPageWord+"</a></span>"),start>1&&(e+="page"==type?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>'),start>15&&(e+="...");for(var r=start;r<=end;r++)e+=pagenumber==r?'<span class="showpagePoint">'+r+"</span>":1==r?"page"==type?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>':"page"==type?'<span class="showpageNum"><a href="#" onclick="redirectpage('+r+');return false">'+r+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+r+');return false">'+r+"</a></span>";end<maximum-1&&(e+=""),end<maximum&&(e+="page"==type?'<span class="showpageNum"><a href="#" onclick="redirectpage('+maximum+');return false">'+maximum+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+maximum+');return false">'+maximum+"</a></span>");var n=parseInt(pagenumber)+1;pagenumber<maximum&&(e+="page"==type?'<span class="showpageNum"><a href="#" onclick="redirectpage('+n+');return false">'+downPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+n+');return false">'+downPageWord+"</a></span>");for(var t=document.getElementsByName("pageArea"),l=document.getElementById("blog-pager"),p=0;p<t.length;p++)t[p].innerHTML=e;t&&t.length>0&&(e=""),l&&(l.innerHTML=e)}function arithmetictotaldata(a){var e=a.feed,s=parseInt(e.openSearch$totalResults.$t,10);looppagenavi(s)}function pagenaviblogger(){var a=bspagenavi;-1!=a.indexOf("/search/label/")&&(lblname1=-1!=a.indexOf("?updated-max")?a.substring(a.indexOf("/search/label/")+14,a.indexOf("?updated-max")):a.substring(a.indexOf("/search/label/")+14,a.indexOf("?&max"))),-1==a.indexOf("?q=")&&-1==a.indexOf(".html")&&(-1==a.indexOf("/search/label/")?(type="page",pagenumber=-1!=bspagenavi.indexOf("#PageNo=")?bspagenavi.substring(bspagenavi.indexOf("#PageNo=")+8,bspagenavi.length):1,document.write('<script src="'+home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=arithmetictotaldata">')):(type="label",-1==a.indexOf("&max-results=")&&(postperpage=20),pagenumber=-1!=bspagenavi.indexOf("#PageNo=")?bspagenavi.substring(bspagenavi.indexOf("#PageNo=")+8,bspagenavi.length):1,document.write('<script src="'+home_page+"feeds/posts/summary/-/"+lblname1+'?alt=json-in-script&callback=arithmetictotaldata&max-results=1" >')))}function redirectpage(a){jsonstart=(a-1)*postperpage,nopage=a;var e=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(s)}function redirectlabel(a){jsonstart=(a-1)*postperpage,nopage=a;var e=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.setAttribute("src",home_page+"feeds/posts/summary/-/"+lblname1+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(s)}function finddatepost(a){post=a.feed.entry[0];var e=post.published.$t.substring(0,19)+post.published.$t.substring(23,29),s=encodeURIComponent(e);if("page"==type)var r="/search?updated-max="+s+"&max-results="+postperpage+"#PageNo="+nopage;else var r="/search/label/"+lblname1+"?updated-max="+s+"&max-results="+postperpage+"#PageNo="+nopage;location.href=r}var nopage,type,pagenumber,lblname1;pagenaviblogger();
//]]>
</script>
</body>
</html>