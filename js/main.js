$(document).ready(function() {

  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
     // $(".menuArrow").removeClass("fa-chevron-down");
     // $(".menuArrow").addClass("fa-chevron-up");
     $(".menuArrow").toggleClass("fa-chevron-up fa-chevron-down");
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 500 ) {     
      $('nav ul').removeAttr('style');
     }
  });//end resize


  $('.not-clicked').click(function() {
    $("a.clicked").addClass('not-clicked');    
    $("img.clicked").addClass('not-clicked');

    $("a.clicked.not-clicked").removeClass('clicked');
    $("img.clicked.not-clicked").removeClass('clicked');

    $(this).addClass('clicked');
    $(this).removeClass('not-clicked');

    $("a.clicked img").addClass('clicked');
    $("a.clicked img").removeClass('not-clicked');
  });// end thumbnail clicked/not-clicked toggle

  $('.clicked').click(function() {
    $("a.clicked").addClass('not-clicked');    
    $("img.clicked").addClass('not-clicked');

    $("a.clicked.not-clicked").removeClass('clicked');
    $("img.clicked.not-clicked").removeClass('clicked');

    $(this).addClass('clicked');
    $(this).removeClass('not-clicked');

    $("a.clicked img").addClass('clicked');
    $("a.clicked img").removeClass('not-clicked');
  });// end thumbnail for first thumbnail toggle

});//end ready


//js to make the color clipboard in styleguide
function copyToClipboard(elementId) {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

}

