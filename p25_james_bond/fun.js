const button = document.querySelector('.start-btn');
const mask = document.querySelector('.circle');

button.addEventListener('click', function addAnimation (){
    button.classList.toggle("btn--animation");
    mask.classList.toggle("circle__animation")
})