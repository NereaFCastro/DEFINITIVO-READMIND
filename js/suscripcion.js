document.addEventListener('DOMContentLoaded', function() {
    // DECLARAMOS VARIABLES
    const form = document.getElementById('suscripcion');
    const confirmacion = document.getElementById('confirmacion');


// DECLARAMOS FUNCIONES
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío del formulario por defecto

        if (validateForm()) {
            form.style.display = 'none';
            confirmacion.style.display = 'block';
        }
    });

    function validateForm() {
        let isValid = true;

        // Validación de nombre
        if (!validateField('nombre')) isValid = false;
        // Validación de apellidos
        if (!validateField('apellidos')) isValid = false;
        // Validación de email
        if (!validateEmail()) isValid = false;
        // Validación de confirmación de email
        if (!validateConfirmEmail()) isValid = false;
        // Validación de contraseña
        if (!validatePassword()) isValid = false;
        // Validación de confirmación de contraseña
        if (!validateConfirmPassword()) isValid = false;

        return isValid;
    }

    function validateField(id) {
        const field = document.getElementById(id);
        const errorSpan = document.getElementById(`error__${id}`);
        
        if (field.value.trim() === '') {
            errorSpan.textContent = `El campo ${id} es obligatorio.`;
            return false;
        } else {
            errorSpan.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const email = document.getElementById('email');
        const errorSpan = document.getElementById('error__email');
        
        if (!email.value.includes('@')) {
            errorSpan.textContent = 'Por favor, ingrese un correo electrónico válido.';
            return false;
        } else {
            errorSpan.textContent = '';
            return true;
        }
    }

    function validateConfirmEmail() {
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirm__email').value;
        const errorSpan = document.getElementById('error__confirm-email');
        
        if (email !== confirmEmail) {
            errorSpan.textContent = 'Los correos electrónicos no coinciden.';
            return false;
        } else {
            errorSpan.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const password = document.getElementById('password');
        const errorSpan = document.getElementById('error__password');
        
        if (password.value.length < 8) {
            errorSpan.textContent = 'La contraseña debe tener al menos 8 caracteres.';
            return false;
        } else {
            errorSpan.textContent = '';
            return true;
        }
    }

    function validateConfirmPassword() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm__password').value;
        const errorSpan = document.getElementById('error__confirm-password');
        
        if (password !== confirmPassword) {
            errorSpan.textContent = 'Las contraseñas no coinciden.';
            return false;
        } else {
            errorSpan.textContent = '';
            return true;
        }
    }
});