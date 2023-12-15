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
    h1.innerText = `level ${level}`;

    let randomIndex = Math.floor(Math.random()*3);
    let randomColor = btns[randomIndex];
    let randombtn = document.querySelector(`.${randomColor}`);
    btnFlash(randombtn);
}

function btnFlash2(btn){
    btn.classList.add("shadow--white");
    setTimeout(() => {
        btn.classList.remove("shadow--white");
    }, 250);
}
function btnPress(){
    // here this -- refers to the button pressed.
   let btn = this;
   btnFlash2(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}