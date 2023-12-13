let systemSeq = [];
let userSeq = [];

let start = false;

let body = document.querySelector("body");

let btn = document.querySelector(".btn");

let heading = document.querySelector(".headingAnimation");
let level = 1;


body.addEventListener("keydown", function () {
    if (level === 1) {
        start = true;
        console.log("game started");
        heading.classList.remove("headingAnimation");

        gameStart();
    }
});

function gameStart() {
    heading.innerHTML = `level ${level}`;
    level++;
    let n = randomNo();
    // n=1;
    if (n === 1) {
        // blue.classList.remove("blue");   -----------> these commented parts are converted into re-useable function flash();

        // setTimeout(() => {
        //     blue.classList.add("blue");
        // }, 200);
        flash("blue");
        systemSeq.push("blue");
    } else if (n === 2) {
        // red.classList.remove("red");

        // setTimeout(() => {
        //     red.classList.add("red");
        // }, 200);
        flash("red");
        systemSeq.push("red");
    } else if (n === 3) {
        // yellow.classList.remove("yellow");

        // setTimeout(() => {
        //     yellow.classList.add("yellow");
        // }, 200);
        flash("yellow");
        systemSeq.push("yellow");
    } else if (n === 4) {
        // green.classList.remove("green");

        // setTimeout(() => {
        //     green.classList.add("green");
        // }, 200);
        flash("green");
        systemSeq.push("green");
    }
    userSeq = [];
}

//add event listeners to all buttons and inside them push clicked color inside userSeq.
// compare userSeq with systemSeq and if same Continue else game over
// after exiting the comparation loop check if length of systemSeq is == userSeq if yes level up.
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

blue.addEventListener("click", function () {
    storeUserInput("blue");
    flash2("blue");
});

red.addEventListener("click", function () {
    storeUserInput("red");
    flash2("red");
});

yellow.addEventListener("click", function () {
    storeUserInput("yellow");
    flash2("yellow");
});

green.addEventListener("click", function () {
    storeUserInput("green");
    flash2("green");
});

//helper functions

function randomNo() {
    let r = Math.floor((Math.random() * 4) + 1);
    return r;
}

function flash(colorName) {
    let boxName = document.querySelector(`.${colorName}`);
    boxName.classList.remove(colorName);
    boxName.classList.add("bg--white");

    setTimeout(() => {
        boxName.classList.remove("bg--white")
        boxName.classList.add(colorName);
    }, 400);
}

function flash2(colorName) {
    let boxName = document.querySelector(`.${colorName}`);
    boxName.classList.add("shadow--white");
    setTimeout(() => {
        boxName.classList.remove("shadow--white");
    }, 200);
}

function storeUserInput(colorName) {
    userSeq.push(colorName);
    for (let i = 0; i < userSeq.length; i++) {
        if (userSeq[i] == systemSeq[i]) {
            continue;
        } else {
            console.log("game over");
            gameOver();
        }
    }
    if (userSeq.length == systemSeq.length) {
        setTimeout(() => {
            gameStart();
        }, 800);
    }
}

function gameOver() {

    systemSeq = [];
    heading.innerHTML = "Press A key to Start!";
    heading.classList.add("headingAnimation");
    level = 1;
    body.style.backgroundColor = "red";
    setTimeout(() => {
        body.style.backgroundColor = "antiquewhite";
    }, 100);
}
