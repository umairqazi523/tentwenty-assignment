import {
    gsap
} from "gsap";

gsap.config({
    nullTargetWarn: false,
});

let heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {
    let heroCarouselTimelines = [];
    let heroCarouselSlides = document.querySelectorAll('.carousel-slide');
    let sliderControls = document.querySelectorAll('.hero-carousel--nav__controls .carousel-control');
    gsap.set(sliderControls[1], {
        opacity: 1,
        pointerEvents: 'all',
        zIndex: 2,
    });
    let heroCarouselMainTimeline = gsap.timeline({
        repeat: -1
    });
    heroCarouselSlides.forEach((slide, index) => {
        let slideImageWrapper = slide.querySelector('.carousel-slide__image');
        let slideImage = slideImageWrapper.querySelector('img');
        let slideCaptionSubtitle = slide.querySelector('.carousel-slide__caption__subtitle');
        let slideCaptionTitle = slide.querySelector('.carousel-slide__caption__title');
        let progressBar = document.querySelector('.hero-carousel--nav__controls__progress .progress-bar');
        slide.setAttribute('data-slide', index + 1);
        if (index == 0) {
            slide.classList.add('carousel-slide-active');
            sliderControls[index + 1]
        }
        if (index == heroCarouselSlides.length - 1) {
            slide.classList.add('carousel-slide-prev');
        }

        let slideTimeline = gsap.timeline({
            onStart: function () {
                let prevSlide = slide.previousElementSibling;
                heroCarouselSlides.forEach((slide, index) => {
                    slide.classList.remove('carousel-slide-active');
                    slide.classList.remove('carousel-slide-prev');
                })

                slide.classList.add('carousel-slide-active');
                if (prevSlide) {
                    prevSlide.classList.add('carousel-slide-prev');
                } else {
                    heroCarouselSlides[heroCarouselSlides.length - 1].classList.add('carousel-slide-prev');
                }
                progressTimeline.duration(slideTimeline.duration() + 1)
                progressTimeline.restart().play()
                if (index == heroCarouselSlides.length - 1) {
                    let resetTimeline = gsap.timeline({});
                    resetTimeline.to(sliderControls, {
                        opacity: 0,
                        pointerEvents: 'none',
                        zIndex: 1,
                    }).to(sliderControls[0], {
                        opacity: 1,
                        pointerEvents: 'all',
                        zIndex: 2,
                    }, '<')
                } else {
                    let resetTimeline2 = gsap.timeline({});
                    resetTimeline2.to(sliderControls, {
                        opacity: 0,
                        pointerEvents: 'none',
                        zIndex: 1,
                    }).to(sliderControls[index + 1], {
                        opacity: 1,
                        pointerEvents: 'all',
                        zIndex: 2,
                    }, '<')
                }
            },
            onComplete: function () {},
        });
        slideTimeline.set(slideImageWrapper, {
            clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
            webkitClipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)"
        });
        slideTimeline.fromTo(slideImageWrapper, {
            clipPath: 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)',
            webkitClipPath: 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)'
        }, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 2,
        }).fromTo(slideImage, {
            scale: 1
        }, {
            scale: 1.2,
            duration: 2,
        }, '<').fromTo(slideCaptionSubtitle, {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }).fromTo(slideCaptionTitle, {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }).add(function () {}, "+=4");


        let progressTimeline = gsap.timeline({
            paused: true,
        });
        progressTimeline.fromTo(progressBar, {
            strokeDashoffset: 600
        }, {
            strokeDashoffset: 0,
            ease: 'sine.inOut'
        });

        heroCarouselMainTimeline.add(slideTimeline)
        heroCarouselTimelines.push(slideTimeline);
    });
    heroCarouselMainTimeline.play();

    sliderControls.forEach((control, index) => {
        if (index == sliderControls.length - 1) {
            control.setAttribute('data-activate-slide', 0);
        } else {
            control.setAttribute('data-activate-slide', index + 1);
        }
        control.addEventListener('click', function () {
            let slideIndex = parseInt(this.dataset.activateSlide, 10) - 1;
            slideIndex = slideIndex < 0 ? 0 : slideIndex;
            let targetTimeline = heroCarouselTimelines[slideIndex];
            heroCarouselMainTimeline.progress(targetTimeline.startTime() / heroCarouselMainTimeline.duration());
        });
    });
}