(function ($) {
    "use strict";


    /*================================
        Preloader
        ==================================*/
    // var preloader = $('#preloader');
    // $(window).on('load', function () {
    //     preloader.fadeOut('slow', function () {
    //         $(this).remove();
    //     });
    // });
    var preloader = $('#preloader');
    $(document).ready( function () {
        setTimeout(preloader.fadeOut('slow', function () {
            $(this).remove();
        }), 3000);
     
    });

    /*================================
       slicknav
       ==================================*/
    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });
    /*================================
    stickey Header
    ==================================*/
    //isotop filtering
    // $('#container').imagesLoaded(function () {
    //     $('.filter-button-group').on('click', 'li', function () {
    //         var filterValue = $(this).attr('data-filter');
    //         $grid.isotope({
    //             filter: filterValue
    //         });
    //     });
    //     var $grid = $('.grid').isotope({
    //         itemSelector: '.grid-item',
    //         percentPosition: true,
    //         masonry: {
    //             // use outer width of grid-sizer for columnWidth
    //             columnWidth: 1
    //         }
    //     })
    // });

    // filtering li active
    // $('.filter-btn').on("click", function () {
    //     if ($(this).hasClass('active-btn')) {
    //         $(this).removeClass('active-btn');
    //     } else {
    //         $(this).addClass('active-btn');
    //         $(this).siblings().removeClass('active-btn');
    //     }
    // });

    // $('#container-about').imagesLoaded(function () {
    //     $('.filter-button-group').on('click', 'li', function () {
    //         var filterValue = $(this).attr('data-filter');
    //         $grid.isotope({
    //             filter: filterValue
    //         });
    //     });
    //     var $grid = $('.grid').isotope({
    //         itemSelector: '.grid-item',
    //         percentPosition: true,
    //         masonry: {
    //             // use outer width of grid-sizer for columnWidth
    //             columnWidth: 1
    //         }
    //     })
    // });
    // Image gallery
    $(".light-box").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    // Popup
    $('.video-icon').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });
    /*================================
    stickey Header
    ==================================*/
    const counterArea = $('#counter-area');
    if (counterArea.length) {
        $(window).on('scroll', function () {
            counterUp(counterArea);
        });
    } else {
        null
    }

    function counterUp($area) {
        var a = 0;
        var oTop = $area.offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter_value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
            });
            a = 1;
        }
    }
    /*================================
    All owl Carousels
    ==================================*/

    // Testimonial slider
    const testSlider = $('.testimonial-slider');

    if (testSlider) {
        testSlider.owlCarousel({
            smartSpeed: 2000,
            loop: true,
            mouseDrag: true,
            loop: true,
            touchDrag: true,
            loop: true,
            margin: 0,
            nav: true,
            margin: 20,
            dots: false,
            navText: ['<span class="fas fa-chevron-left "></span>', '<span class="fas fa-chevron-right "></span>'],
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2

                },
                1000: {
                    items: 2
                }
            }
        });
    } else {
        null
    }

    // All clients slider
    const clientSlider = $('.client-slider');
    if (clientSlider) {
        clientSlider.owlCarousel({
            smartSpeed: 1000,
            loop: true,
            mouseDrag: true,
            loop: true,
            touchDrag: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    } else {
        null
    }
    // All clients slider
    // const ourTeam = $('.our-team');
    // if (ourTeam) {

    //     ourTeam.owlCarousel({
    //         smartSpeed: 10,
    //         loop: true,
    //         mouseDrag: true,
    //         loop: true,
    //         touchDrag: true,
    //         margin: 30,
    //         nav: false,
    //         dots: false,
    //         autoplay: true,
    //         responsive: {
    //             0: {
    //                 items: 1
    //             },
    //             600: {
    //                 items: 2
    //             },
    //             1000: {
    //                 items: 3
    //             }
                
    //         }
    //     });
    // } else {
    //     null
    // }
    // All clients slider
    const allProject = $('.all-project');
    if (allProject) {
        allProject.owlCarousel({
            smartSpeed: 1000,
            loop: true,
            mouseDrag: true,
            loop: true,
            touchDrag: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    } else {
        null
    }
    // Barfiler JS
    const progressBar = $('#sp-service');

    if (progressBar.length) {
        $(window).on('scroll', function () {
            var windowHeight = $(window).height(),
                scrollTop = $(this).scrollTop(),
                spService = $('#sp-service').offset().top,
                spServiceHeight = $('#sp-service').outerHeight();
            // barfiler
            if (scrollTop > (spService + spServiceHeight - windowHeight)) {
                $('#bar1').barfiller({
                    barColor: '#111c39',
                    duration: 1500
                });
                $('#bar2').barfiller({
                    barColor: '#111c39',
                    duration: 1600
                });
                $('#bar3').barfiller({
                    barColor: '#111c39',
                    duration: 1700
                });
                $('#bar4').barfiller({
                    barColor: '#111c39',
                    duration: 1400
                });
                $('#bar5').barfiller({
                    barColor: '#111c39',
                    duration: 1800
                });
            };
        });
    }


}(jQuery));

                var _gaq = _gaq || [];
                _gaq.push(['_setAccount', 'UA-XXXXX-X']);
                _gaq.push(['_trackPageview']);
                (function() {
                    var ga = document.createElement('script');
                    ga.type = 'text/javascript';
                    ga.async = true;
                    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ga, s);
                })();
 