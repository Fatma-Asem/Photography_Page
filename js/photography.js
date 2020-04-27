$(document).ready(function() {

    //nice scroll
     $('body').niceScroll();

     $(window).scroll(function() {
        console.log($(window).scrollTop());
      if($(window).scrollTop() >= $('.header-section').height()/2) {
        $(".about-section .about-holder").fadeIn().css('opacity','1').addClass('animate-slide-left ')
      }

      if($(window).scrollTop() >= 750) {
        $(".amazing-icon").eq(0).delay(100).fadeIn(5000).animate({ top: '0', opacity: '1'});
        $(".amazing-icon").eq(1).delay(300).fadeIn(5000).animate({ top: '0', opacity: '1'});
        $(".amazing-icon").eq(2).delay(500).fadeIn(5000).animate({ top: '0', opacity: '1'});
     } 

     if($(window).scrollTop() >= 1500) {
      $(".skills-section .animate-img-one").fadeIn().css('opacity','1').addClass('animate-slide-left ')
    }

    if($(window).scrollTop() >= 1900) {
      $(".skills-section .animate-img-two").fadeIn().css('opacity','1').addClass('animate-slide-right ')
    }

    if($(window).scrollTop() >= 2360) {
      $(".skills-section .animate-img-three").fadeIn().css('opacity','1').addClass('animate-slide-left ')
    }

    if($(window).scrollTop() >= 5020) {
      $(".clients-section .animate-img-one").fadeIn().css('opacity','1').addClass('animate-slide-left ')
    }

    if($(window).scrollTop() >= 5500) {
      $(".clients-section .animate-img-two").fadeIn().css('opacity','1').addClass('animate-slide-right ')
    }
     })


   $('.no-padding').eq(0).hover(function() {
      $(this).children().removeClass('img-overlay')}, function() {
         $(this).children().addClass('img-overlay')
      })

   $('.no-padding').eq(0).hover(function() {
      $(this).addClass('kenburns-left')}, function() {
         $(this).removeClass('kenburns-left')
      })

   $('.no-padding').eq(1).hover(function() {
      $(this).children().removeClass('img-overlay')}, function() {
         $(this).children().addClass('img-overlay')
         })

   $('.no-padding').eq(1).hover(function() {
      $(this).addClass('kenburns-left')}, function() {
         $(this).removeClass('kenburns-left')
      })

   $('.no-padding').eq(2).hover(function() {
      $(this).children().removeClass('img-overlay')}, function() {
         $(this).children().addClass('img-overlay')
      })

   $('.no-padding').eq(2).hover(function() {
      $(this).addClass('kenburns-left')}, function() {
         $(this).removeClass('kenburns-left')
      })

   $('.no-padding').eq(3).hover(function() {
      $(this).children().removeClass('img-overlay')}, function() {
         $(this).children().addClass('img-overlay')
      })

   $('.no-padding').eq(3).hover(function() {
      $(this).addClass('kenburns-left')}, function() {
         $(this).removeClass('kenburns-left')
      })

   $('.no-padding').eq(4).hover(function() {
      $(this).children().removeClass('img-overlay')}, function() {
          $(this).children().addClass('img-overlay')
      })

   $('.no-padding').eq(4).hover(function() {
      $(this).addClass('kenburns-left')}, function() {
         $(this).removeClass('kenburns-left')
      })

   $('.no-padding').eq(5).hover(function() {
      $(this).children().removeClass('img-overlay')}, function() {
         $(this).children().addClass('img-overlay')
      })

   $('.no-padding').eq(5).hover(function() {
      $(this).addClass('kenburns-left')}, function() {
         $(this).removeClass('kenburns-left')
      })

   $('.no-padding').eq(6).hover(function() {
      $(this).children().removeClass('img-overlay')}, function() {
         $(this).children().addClass('img-overlay')
      })

   $('.no-padding').eq(6).hover(function() {
      $(this).addClass('kenburns-left')}, function() {
         $(this).removeClass('kenburns-left')
      })

   $('.no-padding').eq(7).hover(function() {
      $(this).children().removeClass('img-overlay')}, function() {
         $(this).children().addClass('img-overlay')
      })

   $('.no-padding').eq(7).hover(function() {
      $(this).addClass('kenburns-left')}, function() {
         $(this).removeClass('kenburns-left')
       })



   $('.blog-no-overlay').hover(function() {
      $(this).children().removeClass('overlay')}, function() {
         $(this).children().addClass('overlay')
   })

   $('.scroll-top-button').click(function() {
      $('html,body').animate({scrollTop:0}, 1000);
     });

 
 
 
    
});