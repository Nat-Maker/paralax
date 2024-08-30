// Añadir un favicon
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = '/imagenes/logo.ico';
document.head.appendChild(link);

//Inicio de sesion
document.getElementById('joinForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const pdfFile = document.getElementById('pdfFile').files[0];
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (pdfFile && pdfFile.type === 'application/pdf') {
        alert(`¡Bienvenido al Gremio, ${name}!`);
    } else {
        alert('Por favor, sube un archivo PDF válido.');
    }
});


//parallax 1
let texto3 = document.getElementById('texto3');
let fondo5 = document.getElementById('fondo5');
let fondo4 = document.getElementById('fondo4');

let marginTopInicial = parseFloat(window.getComputedStyle(texto3).marginTop);

window.addEventListener('scroll', () => {
    let valorDeScrollY = window.scrollY;

    texto3.style.marginTop = marginTopInicial + valorDeScrollY * .50 + 'px';
    fondo5.style.left = valorDeScrollY * -1.5 + 'px';
    fondo4.style.left = valorDeScrollY * 1.5 + 'px';
});





