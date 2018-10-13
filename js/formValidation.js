var formValidationServiClean = (function(){
    function showModal() {
        $('#serverResponse').modal('show');
    }

    function showCorrectModal(modalType) {
        $('.loading-modal').toggle(modalType === 'loading-modal');
        $('.server-response').toggle(modalType === 'server-response');
    }

    function loadingModal(title) {
        showCorrectModal('loading-modal');
        $('#modaltitle').text(title);
        showModal();
    }

    function serverResponseModal(title, body) {
        showCorrectModal(body)
        $('#modaltitle').text(title);
        $('div.server-response').html(body);
        showModal();
    }

    function notEmpty(elem) {
        var isValid = $(elem).val() == '';
        $(elem).toggleClass('invalid-input',isValid).next().toggle(isValid);
    }

    function makeServerCall() {
        var formData = {};
        $.each($form.serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });
        $.ajax({
            url: '/php/contact_us.php',
            data: formData,
            method:'POST',
            success: function(response) { 
                var modalTitle, modalBody; 
                if(response == "true") {
                    modalTitle = 'Success';
                    modalBody = 'Thank you! your email has been sent.';
                    $form.find('input').val("");
                } else {
                    modalTitle = 'Error';
                    modalBody = 'Sorry, something went wrong while submitting the form. If you see this message again do not hesite to contact us at <br/> <a class="link email" href= "mailto:contact@hcserviclean.com?Subject=Question" title="Email">contact<span class="at">@</span>hcserviclean.com</a>';
                }
                serverResponseModal(modalTitle, modalBody);
            }
        });
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
        loadingModal(loadingTitle);
        makeServerCall();
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
        loadingTitle = 'Loading',
        loadingBody = 'Loading...',
        publicAPI = {
            initialize: initialize
        }

    return publicAPI;
});