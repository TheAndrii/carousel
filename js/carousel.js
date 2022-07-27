(function () {

    let currentCarouselIdx = 0;

    function renderCarousel() {
        const CarouselContainer = document.querySelector('.carousel__item');
        carouselContainer.innerHTML = posts[currentCarouselIdx];
        if (window.innerWidth > 600) {
            const secondCarouselIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentCarouselIdx + 1;
            carouselContainer.innerHTML += posts[secondCarouselIdx];
            if (window.innerWidth > 900) {
                const thirdCarouselIdx = secondCarouselIdx + 1 >= posts.length ? 0 : secondCarouselIdx + 1;
            carouselContainer.innerHTML += posts[thirdCarouselIdx];
            }
        }
    }

    function left() {
        currentCarouselIdx = currentCarouselIdx - 1 < 0 ? post_carousel.length - 1 : currentCarouselIdx - 1;
        renderCarousel();
    }

    function right() {
        currentCarouselIdx = currentCarouselIdx + 1 >= post_carousel.length ? 0 : currentCarouselIdx + 1;
        renderCarousel();
    }


    const leftBtn = document.querySelector('.carousel__bth_left');
    leftBtn.addEventListener('click', left);

    const rightBtn = document.querySelector('.carousel__bth_right');
    rightBtn.addEventListener('click', right);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);

})();


