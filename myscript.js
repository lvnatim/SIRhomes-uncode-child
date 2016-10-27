jQuery(document).ready(function($) {
  var previousScroll = 0;

  // Moves the freewrap as the user scrolls on the page

    $(window).scroll(function(){
      if ($("#free-wrap").length){
        var currentScroll = $(this).scrollTop();
         if (currentScroll > previousScroll){
            $(".free-wrap").addClass("moving-down");
         } else {
            $(".free-wrap").addClass("moving-up");
         }
         previousScroll = currentScroll;
         setTimeout(function(){
          $(".free-wrap").removeClass("moving-up");
            $(".free-wrap").removeClass("moving-down");
         }, 250);
      }
    });

  //Smoothly transitions button presses to the warranty block

  $(".goToWarranty").click(function(e) {
    if ($(".warranty-text").length){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#warranty-block").offset().top - 198
      }, 2000);
    } else {
    }
  });

  $(".view-results").click(function() {
    $('html, body').animate({
        scrollTop: $("#result").offset().top - 60
    }, 2000);
  });

  // Removes warranty if the banner logo exists

  if ($('#free-wrap').length){
    $("#free-wrap").click(function(e) {
      $('html, body').animate({
          scrollTop: $("#warranty-block").offset().top - 198
      }, 2000);
    });
  } else {
    $('#menu-item-201').animate({"opacity":"1"});
  }


  // Ensures previous sticky element fades in instead of just popping in

  if($('.sticky-element').length){
    var $lastFadeout;
    $(window).scroll(function(){
      var $currentSecondLast = $('.is_stucked').eq(-2);
      if($('.is_stucked').length > 1 && $currentSecondLast !== $lastFadeout){
        $('.is_stucked').removeClass("fadeout");
        var $currentSecondLast = $('.is_stucked').eq(-2);
        $prevFadeout = $currentSecondLast
        $currentSecondLast.addClass("fadeout");
      }
      if($('.is_stucked').length === 1){
        $('.is_stucked').removeClass("fadeout");
      }
    });
  }

});