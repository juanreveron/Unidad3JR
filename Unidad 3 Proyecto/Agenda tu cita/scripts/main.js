
document.querySelector('html').onclick = function() {
    alert('¡Hiciste Click! Saludos de AJJ CORPORATION');
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'TU SALUD ES LO MAS IMPORTANTE' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'TU SALUD ES LO MAS IMPORTANTE, ' + miNombre;
    }
  }