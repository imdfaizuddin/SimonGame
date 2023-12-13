let systemSeq = [];
let userSeq = [];

let start = false;

let body = document.querySelector("body");

let btn = document.querySelector(".btn");

let heading = document.querySelector(".headingAnimation");
let level = 1;


body.addEventListener("keydown" , function() {
    if(level === 1){
    start = true;
    console.log("game started");
    heading.classList.remove("headingAnimation");
    
    gameStart();
    }
});

function gameStart() {
    heading.innerHTML= `level ${level}`;
    level++;
    let n = randomNo();
    // n=1;
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
    userSeq = [];
}
//add event listeners to all buttons and inside them compare the two arrays systemreq and userseq and if same call gameStart else game over
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

blue.addEventListener("click", function(){
    // userSeq.push("blue");
    // let arrSame = true;
    // for(let i=0; i < systemSeq.length ; i++){
    //     if(systemSeq[i]== userSeq[i]){
    //         continue;
    //     }else{
    //         arrSame = false;
    //     }
    // }
    // if(arrSame){
    //     gameStart();
    // }else{
    //     console.log("game over");
    // }
    storeUserInput("blue");
});

red.addEventListener("click", function(){
    storeUserInput("red");
});

yellow.addEventListener("click", function(){
    storeUserInput("yellow");
});

green.addEventListener("click", function(){
    storeUserInput("green");
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

function storeUserInput(colorName){
    userSeq.push(colorName);
    for(let i=0; i< userSeq.length ; i++){
        if(userSeq[i]== systemSeq[i]){
            continue;
        }else{
            console.log("game over");
            gameOver();
        }
    }
    if(userSeq.length == systemSeq.length){
        gameStart();
    }
}

function gameOver(){
    systemSeq = [];
    heading.innerHTML = "Press A key to Start!";
    heading.classList.add("headingAnimation");
    level =1;
}

// function compareInputs(colorName){
    
//     userSeq.push(colorName);
   
//     let arrSame = true;
//     for(let i=0; i < systemSeq.length ; i++){
//         // userSeq[i].push(colorName);
//         if(systemSeq[i]== userSeq[i]){
//             continue;
//         }else{
//             arrSame = false;
//         }
//     }
//     if(arrSame){
//         // gameStart();
//     }else{
//         // console.log("game over");
//     }
// }
