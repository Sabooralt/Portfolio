
/* Custom Cursor */




/* Custom Cursor */

$('body').on('click',function(event){
    if(!$(event.target).is('#nav-toggle')){
      $("#page").removeClass("margin");
    }
 });
 /* Change */

/* Project hover */
$(".show-project").hide();
$('.hover-work').hover(function () {
    $(".hide-project").slideUp();
    $(".show-project").slideDown();
    $(".hoverimg").css({"transform": "scale(1.2)","opacity": 0.8})
    
},function(){
    $(".hoverimg").css({"transform": "scale(1)","opacity": 1})
    $(".hide-project").slideDown();
    $(".show-project").slideUp();
    
    /* Project hover */
})

$(window).scroll(function () {
    var navscroll = $(window).scrollTop();
    if (navscroll > 270) {

        $('.licolor').css({"color":"#66d9ed"})
        $("nav").css({ "position": "fixed", "top": 0, "height":"70px", "background":"rgba(0, 0, 0, 0.589)","backdrop-filter":"blur(0.5rem)" });
    }
    else {
        $('nav').attr('style', ''); 
        $('.navbar1 > ul').attr('style', ''); 
        $('.licolor').attr('style', ''); 
       }
       if( navscroll > 1300){
        $("#work").animate({ top: 0, opacity: 1 }, 300);
        $(".work").delay(200).animate({ top: 0, opacity: 1 }, 300);
       }
       if( navscroll > 450){
        $(".about-heading").animate({ top: 0, opacity: 1 }, 300);
        $("#about").delay(100).animate({ top: 0, opacity: 1 }, 300);
        $("#skills-box").delay(250).animate({ top: 0, opacity: 1 }, 300);
       }

});




$("#work").css({"position":"relative", "opacity":0, "top": "+=30"})
$(".work").css({"position":"relative", "opacity":0, "top": "+=30"})
$(".about-heading").css({"position":"relative", "opacity":0, "top": "+=30"})
$("#about").css({"position":"relative", "opacity":0, "top": "+=30"})
$("#skills-box").css({"position":"relative", "opacity":0, "top": "+=30"})
/* $(function(){
    $(window).scroll(function(){
      var worktop = $('#workreveal').height();
      if($(this).scrollTop()>=worktop){
          $("#work").animate({ top: 0, opacity: 1 }, 300);
          $(".work").delay(200).animate({ top: 0, opacity: 1 }, 300);
     
      }
    });
  }); */





/* $(function(){
    $(window).scroll(function(){
      var abouttop = $('#mouse-scroll').height();
      if($(this).scrollTop()>=abouttop){
          $(".about-heading").animate({ top: 0, opacity: 1 }, 300);
        $("#about").delay(100).animate({ top: 0, opacity: 1 }, 300);
        $("#skills-box").delay(250).animate({ top: 0, opacity: 1 }, 300);
          // instead of alert you can use to show your ad
          // something like $('#footAd').slideup();
      }
    });
  }); */
$(function(){
    var abouttop = $('#fadeinmainheading').height()
})
$("#fadeinmainheading").css({ "position": "relative", "opacity": 0, "top": "+=20" });
$("#fadeinmainheading").delay(700).animate({ top: 0, opacity: 1 }, 400);
$(window).scroll(function () {
    let componentsscroll = $(window).scrollTop();
    if (componentsscroll > 500){
       
    }
    else{
        
    }
})

/* Arrow down */
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
        $('#mouse-scroll').fadeOut(600);
    }
    else {
        $('#mouse-scroll').fadeIn(600);
    }

});

/* Arrow down */

/* Arrow Up */
$("#arrow").hide()
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $("#arrow").fadeIn(600);
    }
});
$(window).scroll(function () {
    if ($(window).scrollTop() < 100) {
        $("#arrow").fadeOut(600);
    }
});

        
$(window).resize(function () {
    if ($(window).width() > 660) {
        $("body").css({'overflow':'visible'})
        $("body").css({'overflow-x':'hidden'})
        $('#nav-responsive').attr('style', '');
        
    }
});
/* Arrow Up */
/* NavResponsive */

$("#nav-res-btn").on('click', function (event) {
    
    
    
    $('#nav-responsive').attr('style', '');
    $("#nav-responsive").show()
    $("body").css({'overflow':'hidden'})
    $("#nav-responsive").css({ "inset": "0 0 0 25%",  "height":"500vh" });
    
    $(".x-btnsvg").on('click', function (event) {
        $("body").css({'overflow':'visible'})
        $("body").css({'overflow-x':'hidden'})
        $(".nav-responsive").css({ "inset": "0 0 0 100%" });

    })
});
$('.navbar1 ul li a').click(function (event) {
    $("body").css({'overflow':'visible'})
    $("body").css({'overflow-x':'hidden'})
    $(".nav-responsive").css({ "inset": "0 0 0 100%" });

});

/* NavResponsive */

$(".socials").hover(function () {
    $(".socials").removeClass("socials222")
}, function () {

    $(".socials").addClass("socials222")
})
