document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header__button');
    const mobileMenu = document.querySelector('.header__secciones-movil');

    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Cambia 50 por la distancia que desees
            mobileMenu.classList.remove('active');
        }
    });
});
