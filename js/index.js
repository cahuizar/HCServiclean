

window.sr = ScrollReveal({ reset: true });
sr.reveal('.scroll');
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