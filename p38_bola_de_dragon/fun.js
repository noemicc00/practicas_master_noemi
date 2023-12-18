// CONSTANTES
const fighter = document.querySelectorAll('img');
const fightBtn = document.querySelector('button');
const winner = document.querySelector('.winner');
const personajes = {
    p0: {
        name: 'goku',
        force: 1
    },
    p1: {
        name: 'vejeta',
        force: 2
    }, 
    p2: {
        name: 'picollo',
        force: 3
    } 
};

// FUNCIONES


/**
 * Description
 * @param {any} 'click'
 * @param {any} function(
 * @returns {any}
 */
fightBtn.addEventListener('click', function(){
    var forceOne = fighterOne();
    var forceTwo = fighterTwo();
    Stregth(forceOne,forceTwo);

})

/**
 * Description
 * @returns {any}
 */
function fighterOne(){
    var claves = Object.keys(personajes); // [p0, p1, p2]
    var indiceAleatorioOne = Math.floor(Math.random()*claves.length); //0, 1 o 2
    var luchadorSeleccionado = personajes[claves[indiceAleatorioOne]];
  
    fighter[0].src = `${luchadorSeleccionado.name}.webp`;

    return luchadorSeleccionado.force;
}

function fighterTwo(){
    var claves = Object.keys(personajes); // [p0, p1, p2]
    var indiceAleatorioTwo = Math.floor(Math.random()*claves.length); //0, 1 o 2
    var luchadorSeleccionado = personajes[claves[indiceAleatorioTwo]];
  
    fighter[1].src = `${luchadorSeleccionado.name}.webp`;

    return luchadorSeleccionado.force;
}

function Stregth(forceOne,forceTwo) {
    if (forceOne > forceTwo) {
        winner.textContent = "FIGHTER ONE WINS";
    } else if (forceOne < forceTwo) {
        winner.textContent = "FIGHTER TWO WINS";
    } else {
        winner.textContent = "DRAW";
    }
}

// ***************************
fightBtn.addEventListener('click', fight)

function fight (){
    const KeyLeft = Math.floor(Math,random()*3);
    const KeyRight = Math.floor(Math,random()*3);

    const urlPhotoLeft = personajes['p'+KeyLeft].name + '.webp'
    const urlPhotoRight = personajes['p'+KeyLeft].name + '.webp';

    const photoLeft = document.createElement('img');
    photoLeft.src = urlPhotoLeft;
    photoContainerLeft.innerHTML ="";
    photoContainerLeft.appendChild(photoLeft); // photocontainer es una contaste que captura miguel del html donde va contenido la imagen

    const photoRight = document.createElement('img');
    photoRight.src = urlPhotoRight;
    photoContainerRight.innerHTML ="";
    photoContainerRight.appendChild(photoRight); // photocontainer es una contaste que captura miguel del html donde va contenido la imagen

    const forceLeft = personajes['p'+KeyLeft].force;
    const forceRight = personajes['p'+KeyRight].force;

    showWinner(forceLeft,forceRight);
}

function showWinner(forceLeft,forceRight){
    photoContainerRight.parentNode.classList.remove('winner', 'draw');
    photoContainerLeft.parentNode.classList.remove('winner', 'draw');

    if(forceLeft > forceRight ){
        photoContainerRight.parentNode.classList.add('winner');
    } else if (forceLeft < forceRight){
        photoContainerLeft.parentNode.classList.add('winner');
    } else {
        photoContainerRight.parentNode.classList.add('draw');
        photoContainerLeft.parentNode.classList.add('draw');//se lo pone al padre con parentNode
    }
}


