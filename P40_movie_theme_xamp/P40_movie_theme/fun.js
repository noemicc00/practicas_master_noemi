const container = document.querySelector('.container');

async function logJson(){
    const response = await fetch ('actors_and_actress.json');
    const data = await response.json();
    return data;
}
async function displayActors(){
    const actors = await logJson();
    actors.forEach(element => {
        const actorContainer = document.createElement("div");
        const dataContainer =document.createElement("div");
        const imgContainer = document.createElement("div");
        const imgItem = document.createElement("img");

        imgItem.src ='bust-in-silhouette-svgrepo-com.svg';

        const nameDiv = document.createElement("div");
        const nameContent = document.createTextNode(element.name);

        const rateDiv = document.createElement("div");
        const rateContent = document.createTextNode(element.rating)

        const altNameDiv = document.createElement("div");
        let altNameContent;
        if(element.alternative_name=== null){
            altNameContent = document.createTextNode("No disponible")
        } else {
             altNameContent = document.createTextNode(element.alternative_name)
        }

        const objectIdDiv = document.createElement("div");
        const objectIdContent = document.createTextNode(element.objectID)

        rateDiv.appendChild(rateContent);
        nameDiv.appendChild(nameContent);
        altNameDiv.appendChild(altNameContent);
        objectIdDiv.appendChild(objectIdContent);

        container.appendChild(actorContainer);

        actorContainer.appendChild(imgContainer);
        imgContainer.appendChild(imgItem)
        actorContainer.appendChild(dataContainer);
        dataContainer.appendChild(nameDiv);
        dataContainer.appendChild(rateDiv);
        dataContainer.appendChild(altNameDiv)
       dataContainer.appendChild(objectIdDiv);

        actorContainer.classList.add('actor-container');
        dataContainer.classList.add('data-container');
        imgContainer.classList.add('img-container');
        imgItem.classList.add('img-item');
        nameDiv.classList.add('name');
        rateDiv.classList.add('rate');
        altNameDiv.classList.add('alt-name');
        objectIdDiv.classList.add('object-id');
        if(element.rating>=3000){
            actorContainer.classList.add('gold');
        } else if(element.rating>=2000 && element.rating<3000){
            actorContainer.classList.add('blue');
        } else if(element.rating>=1000 && element.rating<2000){
            actorContainer.classList.add('pink');
        } else if (element.rating>=500 && element.rating<1000){
            actorContainer.classList.add('green');
        }else{
            actorContainer.classList.add('gray');
        }
    });
}
displayActors();
