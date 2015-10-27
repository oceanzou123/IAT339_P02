$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
    //  $(".menuArrow").removeClass("fa-chevron-down");
    // $(".menuArrow").addClass("fa-chevron-up");
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 500 ) {     
      $('nav ul').removeAttr('style');
     }
  });//end resize
});//end ready