$(document).foundation();


$(".marketing-site-hero .button").click(function() {
    $('html,body').animate({
        scrollTop: $(".intro").offset().top},
        'slow');
});