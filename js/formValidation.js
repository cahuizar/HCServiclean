var formValidationServiClean = (function(){
    function refreshPage() {
        if(isSuccess) {
            location.reload();
        }
    }
    function showModal() {
        $('#serverResponse').modal('show');
    }

    function showCorrectModal(modalType) {
        $('.loading-modal').toggle(modalType === 'loading-modal');
        $('.server-response').toggle(modalType === 'server-response');
    }

    function loadingModal(title) {
        showCorrectModal('loading-modal');
        $modalTitle.text(title);
        showModal();
    }

    function serverResponseModal(title, body) {
        showCorrectModal('server-response');
        $modalTitle.text(title);
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
            url: $phpFilePath,
            data: formData,
            method:'POST',
            success: function(response) { 
                var modalTitle, modalBody; 
                if(response == "true") {
                    modalTitle = 'Success';
                    modalBody = 'Your email has been successfully sent. You will receive an email confirmation from us very shortly. <div class="mt-4">For any questions you can email us at: <a class="link email" href= "mailto:contact@hcserviclean.com?Subject=Question" title="Email">contact<span class="at">@</span>hcserviclean.com</a></div>';
                    isSuccess = true;
                } else {
                    modalTitle = 'Error';
                    modalBody = 'Sorry, something went wrong while submitting the form. <div class="mt-4">If you see this message again do not hesitate to contact us at <br/> <a class="link email" href= "mailto:contact@hcserviclean.com?Subject=Question" title="Email">contact<span class="at">@</span>hcserviclean.com</a></div>';
                }
                serverResponseModal(modalTitle, modalBody);
            }
        });
    }

    function formPost() {
        isSuccess = false;
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
        $modal = $(args.modal);
        $phpFilePath = $form.attr('action');
        $form.bind("submit", formPost);
        $modal.bind('hide.bs.modal', refreshPage);
        $length.bind("blur", function() { 
            return notEmpty(this); 
        });
    }

    var 
        $length = $('.length-check'),
        $modal,
        $form,
        $phpFilePath,
        isSuccess = false,
        $modalTitle = $('#modaltitle'),
        loadingTitle = 'Loading',
        publicAPI = {
            initialize: initialize
        }

    return publicAPI;
});