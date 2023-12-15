let gameSeq = [];
let userSeq = [];

let btns = ["blue","red","yellow","green"];

let started = false;
let level = 0;

let h1 = document.querySelector("h1");

document.addEventListener("keydown", function () {
    if(started == false){
        // game starts
        started = true;

        levelUp();
    }
});

function levelUp(){
    level++;
    h1.innerText = `level ${level}`;
}