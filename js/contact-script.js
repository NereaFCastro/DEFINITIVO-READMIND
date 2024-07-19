document.addEventListener('DOMContentLoaded', function() {
    // DECLARAMOS VARIABLES
    const contactForm = document.getElementById('contact__form');
    const confirmacion = document.getElementById('confirmacion');
// DECLARAMOS FUNCIONES
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Mostrar mensaje de confirmación
        confirmacion.style.display = 'block';

        // Ocultar formulario de contacto
        contactForm.style.display = 'none';
    });
});
