document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    let currentIndex = 0;
    const cardWidth = document.querySelector('.slider__card').offsetWidth + 
                      parseFloat(getComputedStyle(document.querySelector('.slider__card')).marginLeft) + 
                      parseFloat(getComputedStyle(document.querySelector('.slider__card')).marginRight);

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function showNextCard() {
        currentIndex++;
        if (currentIndex >= slider.children.length) {
            currentIndex = 0;
        }
        updateSlider();
    }

    function showPrevCard() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slider.children.length - 1;
        }
        updateSlider();
    }

    // Eventos de los botones
    nextButton.addEventListener('click', showNextCard);
    prevButton.addEventListener('click', showPrevCard);
});