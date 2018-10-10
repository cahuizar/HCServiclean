var formValidationServiClean = (function(){
    function notEmpty(elem) {
        var isValid = $(elem).val() == '';
        $(elem).toggleClass('invalid-input',isValid).next().toggle(isValid);
    }

    function formPost() {
        $form.find('.length-check').each(function(){
            notEmpty(this);
        })
        event.preventDefault();
        event.stopPropagation();
        if($('.invalid-input').is(':visible')) {
            return false;
        }
        var formData = {};
        $.each($form.serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });
        $.ajax({
            url: '/php/contact_us.php',
            data: formData,
            method:'POST',
            success: function(response) { 
                if(response == "true") {
                    $serverMessage.addClass('success-message').html('Thank you! your email has been sent.');

                } else {
                    $serverMessage.addClass('invalid-message').html('Uh oh... there was an error, please try again');
                }
                
            }
        });
    }

    function initialize(args){
        $form = $(args.form);
        $serverMessage = $form.find('.server-message');
        $form.bind("submit", formPost);
        $length.bind("blur", function() { 
            return notEmpty(this); 
        });
    }

    var 
        $length = $('.length-check'),
        $form,
        $serverMessage,
        publicAPI = {
            initialize: initialize
        }

    return publicAPI;
});