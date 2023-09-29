const carrusel = document.querySelector('.carrusel');
const imagenes = carrusel.querySelectorAll('img');
let indiceImagenActual = 0;

function mostrarSiguienteImagen() {
    imagenes[indiceImagenActual].style.display = 'none';
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    imagenes[indiceImagenActual].style.display = 'block';
}

setInterval(mostrarSiguienteImagen, 3000); // Cambia de imagen 
mostrarSiguienteImagen(); // Mostrar la primera imagen
