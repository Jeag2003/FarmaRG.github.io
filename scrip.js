/* Estilo para el menú de navegación */
header {
    background-color: #00324D;
    padding: 10px 0;
    text-align: center;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    transition: color 0.3s; /* Transición suave para el cambio de color */
}

/* Cambiar el color del texto al pasar el mouse por encima */
nav ul li a:hover {
    color: #FFCE40; /* Color dorado */
}

/* Cambiar el color del texto cuando se selecciona */
nav ul li a:active {
    color: #FFCE40; /* Color naranja */
}

/* Estilo para los popups */
.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    overflow: auto;
}

.popup-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 700px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.content p {
    text-align: justify;
}
li a {
    text-decoration: none;
}

p {
    text-align: justify;
}
body {
    font-family: Calibri, sans-serif;
}
/* Estilos generales */
body {
    font-family: Calibri, sans-serif;
    margin: 0;
    padding: 0;
}

/* Estilos para dispositivos móviles */
@media only screen and (max-width: 600px) {
    /* Ajustes para dispositivos con ancho máximo de 600px */
    /* Puedes modificar este valor según tus necesidades */
    /* Por ejemplo, si necesitas ajustar para tablets, puedes cambiar el valor a 768px */
    
    /* Asegúrate de que tu diseño sea adaptable y fluido */
    /* Por ejemplo, usar unidades de medida relativas como porcentajes o vw/vh en lugar de valores absolutos */
    
    /* Aquí puedes agregar estilos específicos para dispositivos móviles */
    /* Ajusta los estilos según tus necesidades para que el contenido se vea bien en pantallas más pequeñas */
}
/* Estilos generales */

/* Estilos para dispositivos con una anchura máxima de 600px */
@media only screen and (max-width: 600px) {
  /* Estilos específicos para pantallas pequeñas */
}

/* Estilos para dispositivos con una anchura máxima de 900px */
@media only screen and (max-width: 900px) {
  /* Estilos específicos para pantallas medianas */
}

/* Estilos para dispositivos con una anchura mínima de 1200px */
@media only screen and (min-width: 1200px) {
  /* Estilos específicos para pantallas grandes */
}
/* Ejemplo de uso de unidades relativas */
.container {
  width: 90%; /* El contenedor ocupa el 90% del ancho de la ventana */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
}

/* Ejemplo de uso de unidades de vista */
.box {
  width: 50vw; /* El ancho de la caja es el 50% del ancho de la ventana */
}
nav ul li a:hover {
    color: #FFCE40; /* Cambia el color al pasar el mouse */
}
.container {
    text-align: center;
    margin-top: 50px;
}

.buttons {
    margin-top: 20px;
}

.good-btn {
    background-color: #28a745;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
}

.bad-btn {
    background-color: #dc3545;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.c// Inicializar los contadores desde el almacenamiento local
let goodCount = parseInt(localStorage.getItem('goodCount')) || 0;
let badCount = parseInt(localStorage.getItem('badCount')) || 0;

// Mostrar los contadores iniciales en la página
document.getElementById('goodCount').innerText = goodCount;
document.getElementById('badCount').innerText = badCount;

// Incrementar el contador de "Buena" y guardar en el almacenamiento local
document.getElementById('goodBtn').addEventListener('click', function() {
    goodCount++;
    document.getElementById('goodCount').innerText = goodCount;
    localStorage.setItem('goodCount', goodCount);
});

// Incrementar el contador de "Mala" y guardar en el almacenamiento local
document.getElementById('badBtn').addEventListener('click', function() {
    badCount++;
    document.getElementById('badCount').innerText = badCount;
    localStorage.setItem('badCount', badCount);
});
