import {
    Swiper,
    EffectCreative,
} from 'swiper';

import {
    gsap
} from 'gsap';

Swiper.use([EffectCreative]);

var isMobile = false;

mediaMobile();

let slideVerticalOffset = 50;

if (isMobile) {
    slideVerticalOffset = 20
}

const qualityProductsSwiper = new Swiper(".quality-products__swiper .swiper", {
    speed: 1000,
    loop: true,
    slidesPerView: "auto",
    grabCursor: true,
    loop: true,
    effect: "creative",
    centeredSlides: true,
    grabCursor: false,
    creativeEffect: {
        prev: {
            shadow: false,
            translate: ["-100%", slideVerticalOffset, 0],
            rotate: [0, 0, -9],
        },
        next: {
            shadow: false,
            translate: ["100%", slideVerticalOffset, 0],
            rotate: [0, 0, 9],
        },
    },
    on: {
        init: function () {
            let swiperDuration = this.params.speed || this.params.autoplay.delay || 0;
            document.documentElement.style.setProperty('--animation-duration', swiperDuration + 'ms');
        }
    }
});


let qualityProductsSection = document.querySelector('.quality-products__swiper');
if (qualityProductsSection) {
    let cursor = document.querySelector('.cursor');

    qualityProductsSection.addEventListener("mouseenter", function (event) {
        cursor.style.opacity = 1;
        window.addEventListener('mousemove', handleMouseMove);
    });

    qualityProductsSection.addEventListener("mouseleave", function (event) {
        cursor.style.opacity = 0;
    });


    function handleMouseMove(event) {
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        gsap.to(cursor, {
            duration: 0.3,
            left: mouseX,
            top: mouseY,
            ease: 'power2.out',
        });
    }
}

window.addEventListener('resize', function (e) {
    mediaMobile();
});

// Media Query for mobile this will return true or false
function mediaMobile() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        isMobile = true;
    } else {
        isMobile = false;
    }
}