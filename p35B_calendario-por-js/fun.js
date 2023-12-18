const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const weekdays = {
    lunes: "L",
    martes: "M",
    miercoles: "X",
    jueves: "J",
    viernes: "V",
    sabado: "S",
    domingo: "D"
};

document.body.innerHTML += "<div class='container' style='display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid #000'> </div";

const container = document.querySelector('.container');

months.forEach(monthItem => {
    container.innerHTML += "<div class='mes-" + monthItem + "' style='text-align:center; padding:10px; border: 2px solid #000; text-transform: uppercase'><h2>" + monthItem + "</h2></div>";

    const mesActual =document.querySelector('.mes-' + monthItem);
    const tituloMes = document.querySelector('.mes-' + monthItem + ' h2');

    tituloMes.style.gridColumn = "span 7";

    mesActual.style.display = "grid";
    mesActual.style.gridTemplateColumns="repeat(7,1fr)"
    
    let dias=31;

    // convertir de objeto a array
    // Object.keys(obj); //me da los Keys 
    // Object.values(obj); //me da los values
    // Object.entries(obj); // me da los keys y los values

    mesActual.innerHTML += `<div class = "dias-tittle-${monthItem}"> </div>`;

    const diasSemanaHeading = document.querySelector('.dias-tittle-'+monthItem);

    diasSemanaHeading.style.display = "grid";
    diasSemanaHeading.style.gridTemplateColumns ="repeat(7,1fr)";
    diasSemanaHeading.style.gridColumn = "span 7";

    Object.values(weekdays).forEach((dia)=>{
        diasSemanaHeading.innerHTML += `<p style = "font-weight:800"> ${dia} </p>`;
    })

    for(let i=1; i<=dias; i++){
        if(monthItem == "febrero"){
            dias=29;
        }
        if(monthItem == "abril"|| monthItem == "junio"|| monthItem == "septiembre" || monthItem == "noviembre"){
            dias =30;
        }
    mesActual.innerHTML+=`<span style = "padding: 8px">${i}</span>`
    }
});

