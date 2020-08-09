/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Typed.js
   7. Parallax Background
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
  12. Google Map
 

*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        
       /* Preloader */
		
        $(window).on('load', function() {
          $('body').addClass('loaded');
        });
		
		
		
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		
		
		
		
        /* Typed.js */
		
        $(window).load(function(){
        $(".typing").typed({
            strings: ["Where <i><b>s</b></i> is your social investment, <br><i><b>α</b></i> is a coefficient of social alpha, <br> <i><b>R</b></i> is the rate of capital return, <br> And <i><b>T</b></i> is time."],    
            /* You can change the home section typing text from here and do not use "&" use "and" */
            typeSpeed: 20
          });
         });
        
		 
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

        
		
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


       
        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
            gallery: { enabled: true },
			zoom: { enabled: true,
			        duration: 500
					
          },
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }
		  
		  
          });

       
	   
		 
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });
		
		
		
		
        /* Statistics Counter */
		
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });


/*

GROWING DOTS SECTION1

*/

        $('.grow1').appear(function() {
        var box = document.getElementById('dot1');

        // center point of the box
        var boxX = 50;
        var boxY = 50;

        document.addEventListener('mousemove', function(e1) {
        var x = e1.pageX,
        y = e1.pageY;
    
        var dx = 400 - x - boxX,
        dy = 400 - y - boxY;
        if(dx<0) dx = 0;
        if(dy<0) dy = 0;
    
        var distance = Math.sqrt(dx *dx + dy * dy);
    
        box.style.width = box.style.height = distance + 'px';
    
}, false);

          }, false);
        /*

GROWING DOTS SECTION1

*/

        $('.grow2').appear(function() {
          var box2 = document.getElementById('dot2');

        // center point of the box
        var boxX2 = 50;
        var boxY2 = 50;

        document.addEventListener('mousemove', function(e2) {
        var x2 = e2.pageX,
        y2 = e2.pageY;
    
        var dx2 = 400 - x2 - boxX2,
        dy2 = 400 - y2 - boxY2;
        if(dx2<0) dx2 = 0;
        if(dy2<0) dy2 = 0;
    
        var distance2 = Math.sqrt(dx2 *dx2 + dy2 * dy2);
    
        box2.style.width = box2.style.height = distance2 + 'px';
    
}, false);

          }, false);
        /*

GROWING DOTS SECTION1

*/

        $('.grow3').appear(function() {
          var box3 = document.getElementById('dot3');

        // center point of the box
        var boxX3 = 50;
        var boxY3 = 50;

        document.addEventListener('mousemove', function(e3) {
        var x3 = e3.pageX,
        y3 = e3.pageY;
    
        var dx3 = 400 - x3 - boxX3,
        dy3 = 400 - y3 - boxY3;
        if(dx3<0) dx3 = 0;
        if(dy3<0) dy3 = 0;
    
        var distance3 = Math.sqrt(dx3 *dx3 + dy3 * dy3);
    
        box3.style.width = box3.style.height = distance3 + 'px';
    
}, false);

          }, false);
		   

         $('#my-address').gMap({
            zoom: 5,
            scrollwheel: true,
            maptype: 'ROADMAP',
            markers:[
            {
            address: "New York",  /* You can change your address from here */
            html: "<b>Address</b>: <br> Area-2, Rose Area, New York, U.S.A.",   /* You can change display address text from here */
            popup: true
            }
            ]
            });
              
		   
            });

   })(jQuery);