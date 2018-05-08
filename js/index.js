

window.sr = ScrollReveal({ reset: true });
sr.reveal('.scroll');

$(function () {
  $(document).scroll(function () {
    var nav = $("#nav");
    var hero = $('#carouselExampleIndicators');
    //$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() + 200);
    if(!isScrolledIntoView(hero)) {
        $(nav).addClass('scrolled');

    } else {
        $(nav).removeClass('scrolled');
    }
  });
});

function isScrolledIntoView(elem){
   return $(window).scrollTop() < $(elem).offset().top + $(elem).height()-100;
}

$(document).ready(function(){
	$('.carousel').carousel({
		interval: 5000
	})

	$('#carouselExampleIndicators').on('slid.bs.carousel', function () {

  });
  
  $('#copyright-year').html((new Date).getFullYear());
  $('#yearsWorking').html((new Date).getFullYear() - 2010);

	$("#nav ul li a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 200
      }, 1000, function(){

      });

  });
});