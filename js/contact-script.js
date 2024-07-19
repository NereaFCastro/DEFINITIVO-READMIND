document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact__form');
    const confirmacion = document.getElementById('confirmacion');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Mostrar mensaje de confirmación
        confirmacion.style.display = 'block';

        // Ocultar formulario de contacto
        contactForm.style.display = 'none';
    });
});
