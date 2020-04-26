$(function() {

    //alert('ready');

    //document.addEventListener("touchstart", function () {}, true);

    $('.js-input').keyup(function () {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });

})
