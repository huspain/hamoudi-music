jQuery(document).ready(function ($) {
    "use strict";

    //Smooth Scrolling for navigation with offset for header
    $(function() {
        $('.nav-tabs > li, .nav-tabs > li > a').click(function (e) {
            e.preventDefault();
            var target = $(this.hash);
            $('html, body').animate({
                scrollTop: target.offset().top - 90
            }, 800);
            console.log("True");
            
            return false;
        });
      });
    //Smooth scrolling for buttons with offset for header
    $(function() {
        $('.hero-content > a, .why-section a, .what-buttons > a, .use-cases-button > a, .about-hero-content > a').click(
            function (e) {
            e.preventDefault();
            if(window.innerWidth > 991) {
                var target = $(this.hash);
                $('html, body').animate({
                    scrollTop: target.offset().top - 90
                }, 800);
                return false;
            }
            else {
                var target = $(this.hash);
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        });
    });
    //Smooth scrolling for "back to top"
    $(function() {
        $('.logo > a').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
