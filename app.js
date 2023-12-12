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

function gameStart() {
    let n = randomNo();
    if(n===1){
        // blue.classList.remove("blue");
        
        // setTimeout(() => {
        //     blue.classList.add("blue");
        // }, 200);
        flash("blue");
    }else if(n===2){
        // red.classList.remove("red");
        
        // setTimeout(() => {
        //     red.classList.add("red");
        // }, 200);
        flash("red");
    }else if(n===3){
        // yellow.classList.remove("yellow");
        
        // setTimeout(() => {
        //     yellow.classList.add("yellow");
        // }, 200);
        flash("yellow");
    }else if(n===4){
        // green.classList.remove("green");
        
        // setTimeout(() => {
        //     green.classList.add("green");
        // }, 200);
        flash("green");
    }
}
//add event listeners to all buttons and inside them compare the two arrays systemreq and userseq and if same call gameStart else game over
let blue = document.querySelector(".blue");

blue.addEventListener("click", function(){
    userSeq.push("blue");
    let arrSame = true;
    for(let i=0; i < systemSeq.length ; i++){
        if(systemSeq[i]== userSeq[i]){
            continue;
        }else{
            arrSame = false;
        }
    }
    if(arrSame){
        gameStart();
    }else{
        console.log("game over");
    }
});

//helper functions

function randomNo() {
    let r = Math.floor((Math.random()*4)+1);
    return r;
}

function flash(colorName) {
    let boxName = document.querySelector(`.${colorName}`);
    boxName.classList.remove(colorName);
        
        setTimeout(() => {
            boxName.classList.add(colorName);
        }, 200);

    systemSeq.push(colorName);
}
