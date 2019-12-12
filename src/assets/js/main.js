/**
 * Section: jQuery
 */


// Carusel
$(function() {

    //@@include('global/_global.js')
    //@@include('components/_components.js')


    $('.slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.slider-2').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.inner-slider'
    });
    
    $('.inner-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        asNavFor: '.slider-2',
        prevArrow: "<img src='assets/img/right.svg' class='next' alt='1'>",
        nextArrow: "<img src='assets/img/left.svg' class='prev' alt='2'>",
        responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },


        ]
    });

});

// Carusel


// Anchor
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
// Anchor


 
var navToggle = $("#navToggle");
var nav = $("#nav");

navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
});