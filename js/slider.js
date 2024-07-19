document.addEventListener('DOMContentLoaded', function() {
    // Slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider__card');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function updateSliderPosition() {
        const width = slides[0].clientWidth;
        slider.style.transform = `translateX(${-currentIndex * width}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = slides.length - 3;
        } else {
            currentIndex--;
        }
        updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex === slides.length - 3) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSliderPosition();
    });

    // Inicializa la posición del slider
    updateSliderPosition();
});

