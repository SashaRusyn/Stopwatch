let time = 0;
let timer;

function start() {
    timer = setInterval(function () {
        time += 1;
        let hours = Math.floor(time / 360000) < 10 ? '0' + Math.floor(time / 360000) : Math.floor(time / 360000);
        let minutes = Math.floor(time % 360000 / 6000) < 10 ? '0' + Math.floor(time % 360000 / 6000) : Math.floor(time % 360000 / 6000);
        let seconds = Math.floor(time % 6000 / 100) < 10 ? '0' + Math.floor(time % 6000 / 100) : Math.floor(time % 6000 / 100);
        let milliseconds = Math.floor(time % 100) < 10 ? '0' + Math.floor(time % 100) : Math.floor(time % 100);
        table.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }, 10);
}

function stop() {
    clearInterval(timer);
}

function restart() {
    clear();
    start();
}

function clear() {
    time = 0;
    table.textContent = '00:00:00.00';
    cleanLaps();
}

function addLap() {
    let lapElement = document.createElement('p');
    lapElement.className = 'lap';
    lapElement.textContent = table.textContent;
    laps.prepend(lapElement);
}

function cleanLaps() {
    laps.innerHTML = '';
}

let startButton = document.querySelector('#start');
let stopButton = document.querySelector('#stop');
let restartButton = document.querySelector('#restart');
let clearButton = document.querySelector('#clear');
let addLapButton = document.querySelector('#lap');
let cleanLapsButton = document.querySelector('#clean-laps');

let table = document.querySelector('#time');
let laps = document.querySelector('#laps');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
restartButton.addEventListener('click', restart);
clearButton.addEventListener('click', clear);
addLapButton.addEventListener('click', addLap);
cleanLapsButton.addEventListener('click', cleanLaps);