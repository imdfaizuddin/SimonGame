let gameSeq = [];
let userSeq = [];

let body = document.querySelector("body");
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

function btnFlash(btn){
    btn.classList.add("bg--white");
    setTimeout(() => {
        btn.classList.remove("bg--white");
    }, 400);
}

function levelUp(){
    level++;
    h1.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*4);
    let randomColor = btns[randomIndex];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    btnFlash(randombtn);
    userSeq = [];
}

function checkAns(idx){
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(() => {
                levelUp();
            }, 1000);
        }
    }else{
        gameOver();
    }
}

function userFlash(btn){
    btn.classList.add("shadow--white");
    setTimeout(() => {
        btn.classList.remove("shadow--white");
    }, 250);
}
function btnPress(){
    // here this -- refers to the button pressed.
   let btn = this;
   userFlash(btn);
   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
   playAudio(`./sounds/${btn.id}.mp3`);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function playAudio(url) {
    new Audio(url).play();
  }

function gameOver(){
    playAudio(`./sounds/wrong.mp3`);
    level = 0;
    gameSeq = [];
    userSeq =[];
    started = false;
    h1.innerHTML = `Game Over! </br> Press A key to start`;
    body.style.backgroundColor = "red";
    setTimeout(() => {
        body.style.backgroundColor = "antiquewhite";
    }, 100);
}