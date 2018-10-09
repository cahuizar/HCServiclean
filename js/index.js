$(document).ready(function(){
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.scroll');
    function checkScrolled() {
        if ($(this).scrollTop() > 10){  
            $('#nav').addClass("scrolled");
        }
        else{
            $('#nav').removeClass("scrolled");
        }
    }
    $(window).scroll(checkScrolled);
    checkScrolled();

    var contactForm = new formValidationServiClean();
    contactForm.initialize({
        form: '#contact-us-form'
    });
    var newsletterForm = new formValidationServiClean();
    newsletterForm.initialize({
        form: '#newsletterForm'
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

var formValidationServiClean = (function(){
    function notEmpty(elem) {
        var isValid = $(elem).val() == '';
        $(elem).toggleClass('invalid-input',isValid).next().toggle(isValid);
    }

    function formPost() {
        $form.find('.length-check').each(function(){
            notEmpty(this);
        })

        if($('.invalid-input').is(':visible')) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        event.preventDefault();
            event.stopPropagation();
            return false;
    }

    function initialize(args){
        $form = $(args.form);
        $form.bind("submit", formPost);
        $length.bind("blur", function() { 
            return notEmpty(this); 
        });
    }

    var 
        $length = $('.length-check'),
        $form,
        publicAPI = {
            initialize: initialize
        }

    return publicAPI;
});