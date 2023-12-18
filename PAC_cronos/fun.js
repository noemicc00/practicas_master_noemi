const seconds = document.querySelector('.segundos');
const cent = document.querySelector('.centesimas');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const reset = document.querySelector('.reset');


let seg = 0;
let cen = 0;
let intervaloCent;
let botonIniciado = false;



/**
 * Description
 * Start of chrono
 * @returns {any}
 */
function iniciarCrono() {
  if (!botonIniciado) {
    intervaloCent = setInterval(() => {
      cent.textContent = cen;
      seconds.textContent = seg;
      if (cen === 100) {
        cen = 0;
        seg=seg+1;
      } else {
        cen = cen + 1;
      }
    }, 10);
    botonIniciado = true;
  }
}

/**
 * Description
 * stop of chrono
 * @returns {any}
 */
function pararCrono() {
  clearInterval(intervaloCent);
  botonIniciado = false;
}

// 
function resetCrono() {
  clearInterval(intervaloCent);
  seg = 0;
  cen = 0;
  seconds.textContent = seg;
  cent.textContent = cen;
  botonIniciado = false;
}

/**
 * Description
 * @param {any} 'click'
 * @param {any} iniciarCrono
 * @returns {any}
 */
iniciar.addEventListener('click', iniciarCrono);
parar.addEventListener('click', pararCrono);
reset.addEventListener('click', resetCrono);

// ***********************

// Crono button es buttons__container. Cada botón tiene un value para hacer el target
// cronoButton.addEventListener('click', function(e){
//   e.target.value === "start" && iniciarCrono();
//   e.target.value === "parar" && pararCrono();
//   e.target.value === "reset" && resetCrono();

  
// })