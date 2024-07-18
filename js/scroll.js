document.addEventListener('DOMContentLoaded', function() {
    const scroll = document.querySelector('.icon__scroll');

    // Mostrar u ocultar la flecha según la posición del scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            scroll.style.display = 'block';
        } else {
            scroll.style.display = 'none';
        }
    });

    // Scroll suave al inicio de la página
    scroll.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
