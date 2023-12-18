let imagenActual = 1;
const totalImagenes = 3; 

function cambiar_imagenes() {
  var cuentas = (imagenActual % totalImagenes);
  console.log(cuentas);

  imagenActual = (cuentas) + 1;
  document.getElementById('imagen').src = `imagen${imagenActual}.jpg`;
}

// otra manera de hacerlo

// 1. CAPTURAR ELEMENTOS

// . para indicar clase # para indicar id 
const boton = document.querySelector('.botonflechas');
const fotovoldemort = document.querySelector('#imagen');

// 2. CREAR EVENTOS DE USARIO

boton.addEventListener('click', cambiarfoto);

// 3. CREAR FUNCIÓN QUE SUCEDERÁ AL EJECUTAR EL EVENTO
let imagecounter=1;
function cambiarfoto(){
  imagecounter=imagecounter+1;

  if(imagecounter==4){imagecounter=1}

  fotovoldemort.src="imagen"+imagecounter+".jpg";
}

