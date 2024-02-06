document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos los elementos necesarios
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');

    // Mostrar/ocultar el menú desplegable al hacer clic en el botón
    dropdown.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Ocultar el menú desplegable si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});