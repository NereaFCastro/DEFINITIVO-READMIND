document.addEventListener('DOMContentLoaded', function() {

    // DECLARAMOS VARIABLES
    const scroll = document.querySelector('.icon__scroll');


// DECLARAMOS FUNCIONES 
    // Mostrar u ocultar la flecha si hacemos un scroll de más de 50px
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
