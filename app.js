const systemSeq = [];
const userSeq = [];

let start = false;

let body = document.querySelector("body");

let btn = document.querySelector(".btn");


body.addEventListener("keydown" , function() {
    start = true;
    console.log("activated")
    let heading = document.querySelector(".headingAnimation");
    heading.classList.remove("headingAnimation");
    heading.innerHTML= "Level 1";
    gameStart();
});

function gameStart(params) {
    let blue = document.querySelector(".blue");
    let n = 1;
    if(n===1){
        blue.classList.remove("blue");
        blue.style.border = 
        setTimeout(() => {
            blue.classList.add("blue");
        }, 200);
    }
}

function randomNo() {
    let r = Math.floor((Math.random()*4)+1);
    return r;
}



