document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    let currentIndex = 0;
    let cardWidth = 0;
    let visibleCards = 3; // Por defecto, en pantallas grandes

    function updateCardDimensions() {
        const cards = document.querySelectorAll('.slider__card');
        cardWidth = cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginLeft) + parseFloat(getComputedStyle(cards[0]).marginRight);
        visibleCards = window.innerWidth >= 800 ? 3 : 1; // Actualiza el número de tarjetas visibles
    }

    function updateSlider() {
        const totalCards = document.querySelectorAll('.slider__card').length;
        const maxIndex = totalCards - visibleCards;
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function showNextCard() {
        const totalCards = document.querySelectorAll('.slider__card').length;
        const maxIndex = totalCards - visibleCards;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    }

    function showPrevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    // Inicializar dimensiones de las tarjetas
    updateCardDimensions();
    updateSlider();

    // Eventos de los botones
    nextButton.addEventListener('click', showNextCard);
    prevButton.addEventListener('click', showPrevCard);

    // Redimensionar el slider en función del tamaño de la ventana
    window.addEventListener('resize', function() {
        updateCardDimensions();
        updateSlider();
    });
});
