/**************************************************** 
 * Определение с какого устройства открывается сайт
*/

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};


// =================================================

var TrandingSlider = new Swiper(".tranding-slider", {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false, 
    initialSlide: 3,
    coverflowEffect: {
        rotate: 0,
        stretch: 85,
        depth: 200,
        modifier: 1,
    },
    autoplay: {
        delay: 1300,
        disableOnInteraction: false,
    },

});

// =================================================


let topGamesSlider = null;

function initTopGamesSlider() {
    const screenIsWide = window.innerWidth >= 961;

    if (screenIsWide && !topGamesSlider) {
        topGamesSlider = new Swiper(".topGames-slider", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: {
                releaseOnEdges: true,
            },
            grabCursor: true,
            loop: false,
            speed: 800,
            pagination: {
                el: ".topGames__slider-pagination",
                clickable: true,
            },
        });
    } else if (!screenIsWide && topGamesSlider) {
        topGamesSlider.destroy(true, true);
        topGamesSlider = null;
    }
}

// =================================================

window.addEventListener("load", initTopGamesSlider);
window.addEventListener("resize", () => {
    clearTimeout(window._sliderResizeTimeout);
    window._sliderResizeTimeout = setTimeout(initTopGamesSlider, 200);
});


$(document).ready(function () {
    $('.moreGames__slider').slick({
        infinite: false,
        slidesToShow: 6,
        rows: 2,
        speed: 800,
        slidesToScroll: 1,
        prevArrow: $('.slider-left_arrow'),
        nextArrow: $('.slider-right_arrow'),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 755,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 695,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 595,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 505,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '120px',
                }
            },
            {
                breakpoint: 455,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '90px',
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '70px',
                }
            },
        ]
    });
});

AOS.init();




