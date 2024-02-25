// Smooth scrolling functionality using JavaScript
document.querySelectorAll(".anchor").forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        console.log('this scroll', e);
        e.preventDefault();
        const targetElement =
            document.querySelector(this.getAttribute('href'));
        console.log('this target', targetElement);
        window.scrollTo({
            top: targetElement.offsetTop - 150,
            behavior: 'smooth'
        });
    });
});

new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    slideToClikeSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    slidesPerView: 'auto',
});
