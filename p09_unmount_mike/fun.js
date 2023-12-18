const slider = document.getElementById('deslizador');

const st0 = document.getElementById('st0');
const st1 = document.getElementById('st1');
const st2 = document.getElementById('st2');
const st3 = document.getElementById('st3');
const st4 = document.getElementById('st4');
const st5 = document.getElementById('st5');
const st6 = document.getElementById('st6');
const st7 = document.getElementById('st7');
const st8 = document.getElementById('st8');
const st9 = document.getElementById('st9');
const st10 = document.getElementById('st10');
const st11 = document.getElementById('st11');
const st12 = document.getElementById('st12');
const st13 = document.getElementById('st13');
const s14 = document.getElementById('st14');
let numeroAleatorio0;
let numeroAleatorio1;
let numeroAleatorio2;
let numeroAleatorio3;
let numeroAleatorio4;
let numeroAleatorio5;
let numeroAleatorio6;
let numeroAleatorio7;
let numeroAleatorio8;
let numeroAleatorio9;
let numeroAleatorio10;
let numeroAleatorio11;
let numeroAleatorio12;
let numeroAleatorio13;
let numeroAleatorio14;

function desmontarMike (){ 

    if(numeroAleatorio0===undefined && numeroAleatorio1===undefined && numeroAleatorio2===undefined && numeroAleatorio3===undefined && numeroAleatorio4===undefined && numeroAleatorio5===undefined && numeroAleatorio6===undefined && numeroAleatorio7===undefined && numeroAleatorio8===undefined && numeroAleatorio9===undefined && numeroAleatorio10===undefined && numeroAleatorio11===undefined && numeroAleatorio12===undefined && numeroAleatorio13===undefined &&numeroAleatorio14===undefined){
        numeroAleatorio0 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio1 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio2 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio3 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio4 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio5 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio6 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio7 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio8 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio9 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio10 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio11 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio12 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio13 = (Math.random() * 6 - 3).toFixed(2);
        numeroAleatorio14 = (Math.random() * 6 - 3).toFixed(2);
    }

    // ST0
    const valorXY0 = numeroAleatorio0 * parseInt(slider.value);
    st0.setAttribute('cx', 340  + (numeroAleatorio0 * parseInt(slider.value)));
    st0.setAttribute('cy', 182.4 + (numeroAleatorio0 * parseInt(slider.value)));
    st0.setAttribute('transform', `rotate(${valorXY0}, ${valorXY0}, ${valorXY0})`);

    // ST1
    const valorXY1 = numeroAleatorio1 * parseInt(slider.value);
    st1.setAttribute('cx', 340 + (numeroAleatorio1 * parseInt(slider.value)));
    st1.setAttribute('cy', 180.4 + (numeroAleatorio1 * parseInt(slider.value)))
    st1.setAttribute('transform', `rotate(${valorXY1}, ${valorXY1}, ${valorXY1})`);

    // ST2
    const valorXY2 = numeroAleatorio2 * parseInt(slider.value);
    st2.setAttribute('cx', 95.5 + (numeroAleatorio2 * parseInt(slider.value)));
    st2.setAttribute('cy', 182.4 + (numeroAleatorio2 * parseInt(slider.value)));
    st2.setAttribute('transform', `rotate(${valorXY2}, ${valorXY2}, ${valorXY2})`);

    // ST3
    const valorXY3 = numeroAleatorio3 * parseInt(slider.value);
    st3.setAttribute('cx', 95.5 + (numeroAleatorio3 * parseInt(slider.value)));
    st3.setAttribute('cy', 180.4 + (numeroAleatorio3 * parseInt(slider.value)));
    st3.setAttribute('transform', `rotate(${valorXY3}, ${valorXY3}, ${valorXY3})`);

    // ST4
    const valorXY4 = numeroAleatorio4 * parseInt(slider.value);
    st4.setAttribute('cx', 217.8 + (numeroAleatorio4 * parseInt(slider.value)));
    st4.setAttribute('cy', 171.5 + (numeroAleatorio4 * parseInt(slider.value)));
    st4.setAttribute('transform', `rotate(${valorXY4}, ${valorXY4}, ${valorXY4})`);

    // ST5
    const valorXY5 = numeroAleatorio5 * parseInt(slider.value);
    st5.setAttribute('cx', 180.7 + (numeroAleatorio5 * parseInt(slider.value)));
    st5.setAttribute('cy', 154.5 + (numeroAleatorio5 * parseInt(slider.value)));
    st5.setAttribute('transform', `rotate(${valorXY5}, ${valorXY5}, ${valorXY5})`);

    // ST6
    const valorXY6 = numeroAleatorio6 * parseInt(slider.value);
    st6.setAttribute('cx', 180.7 + (numeroAleatorio6 * parseInt(slider.value)));
    st6.setAttribute('cy', 154.5 + (numeroAleatorio6 * parseInt(slider.value)));
    st6.setAttribute('transform', `rotate(${valorXY6}, ${valorXY6}, ${valorXY6})`);


    // ST7
    const valorXY7 = numeroAleatorio7 * parseInt(slider.value);
    st7.setAttribute('cx', 255.2 + (numeroAleatorio7 * parseInt(slider.value)));
    st7.setAttribute('cy', 154.5 + (numeroAleatorio7 * parseInt(slider.value)));
    st7.setAttribute('transform', `rotate(${valorXY7}, ${valorXY7}, ${valorXY7})`);

    // ST8
    const valorXY8 = numeroAleatorio8 * parseInt(slider.value);
    st8.setAttribute('cx', 255.2 + (numeroAleatorio8 * parseInt(slider.value)));
    st8.setAttribute('cy', 154.5 + (numeroAleatorio8 * parseInt(slider.value)));
    st8.setAttribute('transform', `rotate(${valorXY8}, ${valorXY8}, ${valorXY8})`);


    
    // ST9
    const valorXY9 = numeroAleatorio9 * parseInt(slider.value);
    st9.setAttribute('transform', `translate(${valorXY9}, ${valorXY9}) rotate(${valorXY9}, ${valorXY9}, ${valorXY9})`);

    // ST10
    const valorXY10 = numeroAleatorio10 * parseInt(slider.value);
    st10.setAttribute('transform', `translate(${valorXY10}, ${valorXY10}) rotate(${valorXY10}, ${valorXY10}, ${valorXY10})`);

    // ST11
    const valorXY11 = numeroAleatorio11 * parseInt(slider.value);
    st11.setAttribute('transform', `translate(${valorXY11}, ${valorXY11}) rotate(${valorXY11}, ${valorXY11}, ${valorXY11})`);

    // ST12
    const valorXY12 = numeroAleatorio12 * parseInt(slider.value);
    st12.setAttribute('transform', `translate(${valorXY12}, ${valorXY12}) rotate(${valorXY12}, ${valorXY12}, ${valorXY12})`);

    // ST13
    const valorXY13 = numeroAleatorio13 * parseInt(slider.value);
    st13.setAttribute('transform', `translate(${valorXY13}, ${valorXY13}) rotate(${valorXY13}, ${valorXY13}, ${valorXY13})`);

    // ST14
    const valorXY14 = numeroAleatorio14 * parseInt(slider.value);
    st14.setAttribute('transform', `translate(${valorXY14}, ${valorXY14}) rotate(${valorXY14}, ${valorXY14}, ${valorXY14})`);
 
}