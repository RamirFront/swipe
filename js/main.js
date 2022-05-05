// burger=====================================================
const burger = document.querySelector(".header__content-humburger");
const menu = document.querySelector(".header__content-nav");
const body = document.querySelector("body");
const flow = document.querySelector(".overlay");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    flow.classList.toggle("active");
});
flow.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    flow.classList.remove("active");
});
// team slider======================================================
new Swiper('.team__slider',{
    pagination:{
        el: '.team-slider.swiper-pagination',
        //Буллеты:
        clickable: true,
        //Динамические буллеты:
        dynamicBullets: true,
    },
    simulateTouch: true,
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
        640: {
            navigation: {
                nextEl: '.team.swiper-button-next',
                prevEl: '.team.swiper-button-prev'
            },
            slidesPerView: 3,
            spaceBetween: 0,
            slideToClickedSlide: true,
        }
    }
});

// FAQ spoiler=======================================================

$(document).ready(function(){
    $('.faq__spoiler-item-title').click(function(event){
        if($('.faq__content-spoiler').hasClass('one')){
            $('.faq__spoiler-item-title').not($(this)).removeClass('active');
            $('.faq__spoiler-item-text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// feedBack slider==========================================

new Swiper('.feedBack-slider',{
    speed: 500,
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});
