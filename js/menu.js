document.addEventListener('DOMContentLoaded', function() {
    // DECLARAMOS VARIABLES
    const menuButton = document.querySelector('.header__button');
    const mobileMenu = document.querySelector('.header__secciones-movil');

    // DECLARAMOS FUNCIONES
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
// El menú se cierra si recorremos más de 50px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
            mobileMenu.classList.remove('active');
        }
    });
});
