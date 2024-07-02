const stoBtnEl = document.getElementById("stoBtn");
const readyBtnEl = document.getElementById("readyBtn");
const goBtnEl = document.getElementById("goBtn");
const light1 = document.getElementById("lightEl");
const light2 = document.getElementById("lightEl2");
const light3 = document.getElementById("lightEl3");


function stopButton(){
    stoBtnEl.style.backgroundColor = "red"
    light1.style.backgroundColor = "red"
    readyBtnEl.style.backgroundColor = "white"
    light2.style.backgroundColor = "white"
    goBtnEl.style.backgroundColor = "white"
    light3.style.backgroundColor = "white"
}

function readyButton(){
    stoBtnEl.style.backgroundColor = "white"
    light1.style.backgroundColor = "white"
    readyBtnEl.style.backgroundColor = "yellow"
    light2.style.backgroundColor = "yellow"
    goBtnEl.style.backgroundColor = "white"
    light3.style.backgroundColor = "white"
}

function goButton(){
    stoBtnEl.style.backgroundColor = "white"
    light1.style.backgroundColor = "white"
    readyBtnEl.style.backgroundColor = "white"
    light2.style.backgroundColor = "white"
    goBtnEl.style.backgroundColor = "green"
    light3.style.backgroundColor = "green"
}