$(document).ready(function(){
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.scroll');
    function checkScrolled() {
        if($(window).width() > 991) {
            if ($(this).scrollTop() > 10 ){  
                $('#nav').addClass("scrolled");
            }
            else{
                $('#nav').removeClass("scrolled");
            }
        }
    }
    $(window).scroll(checkScrolled);
    checkScrolled();

    var contactForm = new formValidationServiClean();
    contactForm.initialize({
        form: '#contactUsForm',
        modal: '#serverResponse'
    });
    var newsletterForm = new formValidationServiClean();
    newsletterForm.initialize({
        form: '#newsletterForm',
        modal: '#serverResponse'
    })
	$('.carousel').carousel({
		interval: 5000
	})
	$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
  });

  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });


  $('#copyright-year').html((new Date).getFullYear());
  $('.yearsWorking').html((new Date).getFullYear() - 2010);

	$("#nav ul li a[href^='#'], .quote-btn, .scroll-link").on('click', function(e) {

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 200
      }, 1000);

  });

});