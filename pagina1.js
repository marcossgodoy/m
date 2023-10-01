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
// Variables
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Manejar eventos de añadir al carrito
document.addEventListener('click', agregarProducto);

// Función para agregar productos al carrito
function agregarProducto(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement;
        obtenerDatosProducto(productoSeleccionado);
    }
}

// Función para obtener los datos del producto seleccionado
function obtenerDatosProducto(producto) {
    const productoInfo = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
    };
    agregarProductoCarrito(productoInfo);
}

// Función para mostrar el producto seleccionado en el carrito
function agregarProductoCarrito(producto) {
    const elementoCarrito = document.createElement('li');
    elementoCarrito.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p>${producto.nombre}</p>
        <p>${producto.precio}</p>
        <button class="eliminar-producto">Eliminar</button>
    `;
    listaCarrito.appendChild(elementoCarrito);
}

// Event listener para vaciar el carrito
vaciarCarritoBtn.addEventListener('click', () => {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
    actualizarTotal();
});

// Función para actualizar el total del carrito
function actualizarTotal() {
    let total = 0;
    const elementosCarrito = document.querySelectorAll('#lista-carrito p:nth-child(3)');

    elementosCarrito.forEach((elemento) => {
        const precio = parseFloat(elemento.textContent.replace('$', ''));
        total += precio;
    });

    totalCarrito.textContent = `$${total.toFixed(2)}`;
}
