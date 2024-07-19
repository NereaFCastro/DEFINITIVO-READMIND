document.addEventListener('DOMContentLoaded', function() {
    // DECLARAMOS VARIABLES
    const acordeonItems = document.querySelectorAll('.acordeon__item');
    const acordeon__infos = document.querySelectorAll('.acordeon__info');
// DECLARMAOS FUNCIONES
    acordeonItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Le deicmos que si el acordeon__info correspondiente ya está abierto que lo cierre, eliminando la clase .active
            if (acordeon__infos[index].classList.contains('active')) {
                acordeon__infos[index].classList.remove('active');
            } else {
                // Primero cierra todos los acordeon__info activos
                acordeon__infos.forEach(acordeon__info => acordeon__info.classList.remove('active'));
                // Luego abre el acordeon__info correspondiente
                acordeon__infos[index].classList.add('active');
            }
        });
    });
});