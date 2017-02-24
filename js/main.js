$(document).ready(function() {
    $('.parallax-window').parallax({imageSrc: '/images/back-coffee.jpg'});
});
$(document).ready(function () {
    $("item-info").find("[rel='tooltip']").tooltip();

    $('item-info').find('.thumbnail').hover(
        function () {
            $(this).find('.caption').fadeIn(250); //.fadeIn(250)slideDown
        },
        function () {
            $(this).find('.caption').fadeOut(205); //.(205)slideUp
        }
    );
});