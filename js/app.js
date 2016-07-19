$(document).foundation()
//fade header background color on scroll
$(window).scroll(function(){
  $("#top").css("opacity", 1 - $(window).scrollTop() / 250);
  });



//onclick border form on nav 

$('.box').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('clicky');
    });




