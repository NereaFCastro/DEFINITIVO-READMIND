document.addEventListener('DOMContentLoaded', () => {
    // DECLARAMOS VARIABLES
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    const cards = document.querySelectorAll('.slider__card');

   
// Obtiene el ancho de la primera tarjeta en el slider y almacenos el valor en la variable cardWidth para saber cuánto se debe desplazar el slider para mostrar la tarjeta siguiente
    let index = 0;
    const cardWidth = cards[0].offsetWidth;

// DECLARAMOS FUNCIONES
// Este parte de código está verificada con inteligencia artifical
    function navigate(direction) {
        const totalCards = cards.length;
        index = (index + direction + totalCards) % totalCards;
        const offset = -index * cardWidth;
        slider.style.transform = `translateX(${offset}px)`; // Usa px en lugar de %
    }

    nextButton.addEventListener('click', () => navigate(1));
    prevButton.addEventListener('click', () => navigate(-1));

    // Inicializa el slider en la posición correcta
    navigate(0);
});

