document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    const cards = document.querySelectorAll('.slider__card');

    if (!slider || !prevButton || !nextButton || cards.length === 0) return;

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;

    function navigate(direction) {
        const totalCards = cards.length;
        currentIndex = (currentIndex + direction + totalCards) % totalCards;
        const offset = -currentIndex * cardWidth;
        slider.style.transform = `translateX(${offset}px)`; // Usa px en lugar de %
    }

    nextButton.addEventListener('click', () => navigate(1));
    prevButton.addEventListener('click', () => navigate(-1));

    // Inicializa el slider en la posición correcta
    navigate(0);
});

