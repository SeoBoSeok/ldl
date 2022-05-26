(function ($) {
    'use strict';

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    //sticky
    // $(window).on('scroll', function (event) {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 20) {
    //         $(".navbar-area").removeClass("sticky");
    //     } else {
    //         $(".navbar-area").addClass("sticky");
    //     }
    // });

    // current nav-link
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav .nav-item");
    window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        });
    };



})()

$('.navbar-toggler').click(function(){
    if ($('.navbar-collapse').hasClass('show')) {
        console.log('it has "show"');
        $('header > .navbar').removeClass('mobile-active');
    } else {
        console.log('it dose not have "show"');
        $('header > .navbar').addClass('mobile-active');
    }
}); 

// $(window).load(function(){
    // consoloe.log("loaded");
// });

// $(document).ready(function(){
//     if ($('#hero-s__top').load()) {
//         $('#preloader').delay(500).fadeOut('slow');
        
//         $(window).scroll();
//     }
//     $('#preloader').hide();
// });

$(window).on("load", function() {
    $('#preloader').delay(500).fadeOut();
});

// $('#s__top').on("load", function(){
//     $('#preloader').delay(500).hide();
// });