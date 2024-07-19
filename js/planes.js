document.addEventListener('DOMContentLoaded', function() {
    // Selector para todos los elementos del acordeón
    const acordeonItems = document.querySelectorAll('.acordeon__item');
    const acordeon__infos = document.querySelectorAll('.acordeon__info');

    acordeonItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Si el acordeon__info correspondiente ya está abierto, ciérralo
            if (acordeon__infos[index].classList.contains('active')) {
                acordeon__infos[index].classList.remove('active');
            } else {
                // Primero cierra todos los acordeon__infoes activos
                acordeon__infos.forEach(acordeon__info => acordeon__info.classList.remove('active'));
                // Luego abre el acordeon__info correspondiente
                acordeon__infos[index].classList.add('active');
            }
        });
    });
});