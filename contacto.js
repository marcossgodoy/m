document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener datos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Crear el objeto de datos para enviar por correo
    var datos = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Enviar datos por correo electrónico
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            service_id: "tu_servicio_id",
            template_id: "tu_template_id",
            user_id: "tu_user_id",
            template_params: datos
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Manejar la respuesta del servidor aquí (por ejemplo, mostrar un mensaje de éxito al usuario)
        console.log(data);
    })
    .catch(function(error) {
        // Manejar errores aquí (por ejemplo, mostrar un mensaje de error al usuario)
        console.error(error);
    });
});
