// CAMBIAR COLOR VARIABLES
var simbolos = "0123456789ABCDEF";
const boton = document.querySelector('#boton');
var backgrounds = document.querySelectorAll('.background-color');
var color = "#";

// CAMBIAR NUMEROS VARIABLES
const casillas= document.querySelectorAll('#number');


// CAMBIAR COLORES FUNCION
boton.addEventListener('click', generarColorAleatorio);

function generarColorAleatorio() {
    

    backgrounds.forEach(background => {
        color="";
   
        for (let i = 0; i < 6; i++) {
            color = color+simbolos[Math.floor(Math.random() * 16)];
        }

        background.style.background = "#" +color;

    })

}

// CAMBIAR NUMEROS FUNCION
boton.addEventListener('click', generarNumeroAleatorio);

function generarNumeroAleatorio(){
casillas.forEach(casilla=> {

    const numeroAleatorio=[Math.floor(Math.random()*10)]
    casilla.innerText= numeroAleatorio;
})
}







