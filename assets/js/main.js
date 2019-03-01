$(function() {
    var header = $(".nav");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            header.addClass("nav-scrolled");
        } else {
            header.removeClass("nav-scrolled");
        }
    });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var objectSelect = $(".section1");
    var objectPosition = objectSelect.offset().top - 600;
    if (scroll > objectPosition) {
        $(".html-box").addClass("html-box-active");
        $(".css-box").addClass("css-box-active");
        $(".js-box").addClass("js-box-active");
        $(".xd-box").addClass("xd-box-active");
        $(".illustrator-box").addClass("illustrator-box-active");
        $(".photoshop-box").addClass("photoshop-box-active");
        $(".java-box").addClass("java-box-active");
        $(".cpp-box").addClass("cpp-box-active");
    }
})

$(".read-more").click(function() {
    $('html,body').animate({
        scrollTop: $(".section1").offset().top - 80},
        'slow');
});

$(".contact").click(function() {
    $('html,body').animate({
        scrollTop: $(".section3").offset().top - 58},
        'slow');
});

$(".projects").click(function() {
    $('html,body').animate({
        scrollTop: $(".section2").offset().top - 58},
        'slow');
});