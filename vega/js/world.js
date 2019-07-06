const navigation = document.getElementsByClassName("navigation-nav");
const list = document.getElementsByClassName("navigation-list");

$(document).ready(function(){
    $('.btn-white').hover(function(){
        $('.btn-white-play').attr('src','/img/play2.png');
   },function(){
	$('.btn-white-play').attr('src','/img/play3.png');
   });

  /*$ (".navigation-list").on("click", function(event){
      $(".navigation-nav").hide();
     $("#navi-toogle").removeClass(); 
     $("navigation-nav").show();
   });*/

});


var slides = ["fade-1", "fade-2", "fade-3"];
var showSlides = ["fade-1", "fade-2"];

function slideshow(showSlides) {
  for(var i = showSlides; i < slides.length; i++ ) {
    document.getElementsByClassName("photo").style.display = "inline-block";
  }
}

// Next/previous controls
/*function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("photo");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}*/
