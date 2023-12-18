const buttons=document.querySelector('.buttons');
const trackTime=document.querySelector('.track-time');
const audio=new Audio('audio/bamboleo.mp3');
const playButton = document.querySelector('.play')
const stopButton = document.querySelector('.stop');

audio.addEventListener("timeupdate", function(){
    var songDuration =  audio.currentTime;

    var minutos = Math.floor(songDuration/60);
    var segundos = Math.floor(songDuration%60);

    segundos = segundos < 10 ? '0' + segundos : segundos;

    trackTime.textContent = `${minutos}:${segundos}`;

})

buttons.addEventListener('click', audioControls);

function audioControls(e){
    console.log(e.target.dataset.value);

    if(e.target.dataset.value== "stop") stopEngine();
    if(e.target.dataset.value == "play") playEngine();
    if(e.target.dataset.value == "rewind") rewindEngine();
}

function playEngine(){
    audio.play();
    playButton.src ="img/play-svgrepo-com.svg"
    stopButton.src ="img/pause-off.svg"
}

function stopEngine(){
    audio.pause();
    playButton.src="img/play-off.svg"
    stopButton.src ="img/pause-svgrepo-com.svg"
}

function rewindEngine(){
    var songDuration = audio.currentTime + 10;
    return songDuration;
}