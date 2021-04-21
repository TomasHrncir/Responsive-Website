(function($){
   $(function(){
       
       /*     Scroll to Sections */
       $(".jq--scroll-our-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
           
        }); 
       
       $(".jq--scroll-about-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-pizza").offset().top}, 1500);
           
        }); 
       
       $(".jq--scroll-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1500);
           
        }); 
       
       $(".jq--scroll-photogallery").click(function(){
            $("html, body").animate({scrollTop: $(".jq--photogallery").offset().top}, 1600);
           
        }); 
       
         $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1700);
           
        }); 
       
      ///////* Scroll Buttons to Sections *///////
       
         $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 700);
           
        }); 
       
        $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-pizza").offset().top}, 1000);
           
        }); 
       
//               Mobile Navigation      ////////
       
       $(".jq--nav-icon").click(function(){
           
            $(".nav-background").fadeToggle(200);
            $(".mobile-nav-back").fadeToggle(200);
            $("nav ul").fadeToggle();
       });
       
////               Change Hamburger to Cross vice versa /////
       
       $(".jq--image-hamburger").click(function(){
           
            if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png") 
            {
            $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));  
            }
            else
            {
                $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));  
            }
                      
       });
       
       
       
       
       
       
       
//       if("src obrazku je img/hamburgerMenu.png")
//            { console.log("Smen src na img/scrossmenu.png");}
//            else
//            { console.log("Dej jako src img/HamburgerMenu.png");}
//       
       
   }); 
})(jQuery);
 