const navigation = document.getElementsByClassName("navigation-checkbox");
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


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}
