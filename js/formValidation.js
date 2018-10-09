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