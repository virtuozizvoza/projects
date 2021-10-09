/*global window*/
/*global document*/
/*global var*/
 $('document').ready(function () { 
   
   $('.js--biografija').waypoint(function (direction) {    
       if(direction === 'down') {
            $('nav').addClass('sticky');   
       } else {
            $('nav').removeClass('sticky');
       } {
            offset: '60px'
         }
    });
     
    $(".js--nav-icon").click(function(){
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i")    
        
        nav.slideToggle(200);
    
       /* if (icon.hasClass("fas fa-music")) {
            icon.addClass("fas fa-times");
            icon.removeClass("fas fa-music");
        } else {
            icon.addClass("fas fa-music");
            icon.removeClass("fas fa-times")
        }    */
    })
   $(".js--wp-2").waypoint((dir) => {
            $(".js--wp-2").addClass("animated fadeInLeft");
        }, {
            offset: '20%'
    });
     $(".js--wp-3").waypoint((dir) => {
            $(".js--wp-3").addClass("animated fadeInRight");
        },{
            offset: '20%'
    });
})     
