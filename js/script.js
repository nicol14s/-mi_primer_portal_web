const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    respuesta.textContent = "¡Mensaje enviado correctamente! ♡";
    respuesta.style.color = "#d86f92";
    respuesta.style.textAlign = "center";
    respuesta.style.marginTop = "15px";

    formulario.reset();
});