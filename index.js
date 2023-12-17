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

function btnFlash(btn){
    btn.classList.add("bg--white");
    setTimeout(() => {
        btn.classList.remove("bg--white");
    }, 300);
}

function levelUp(){
    level++;
    h1.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*3);
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
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function gameOver(){
    level = 0;
    gameSeq = [];
    userSeq =[];
    started = false;
    h1.innerText = `Press A key to start`;
}