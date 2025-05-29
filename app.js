let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let allbtns = ["a","b","c","d"];
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
    }

    levelup();
});

let heading2 = document.querySelector("h2");
let btns = document.querySelectorAll(".btn");

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
};

function levelup(){
    userSeq = [];
    level++;
    heading2.innerText = `Level ${level}`;

    let rdidx = Math.floor(Math.random()*3);
    let rdcolor = allbtns[rdidx];
    let rdbtn = document.querySelector(`.${rdcolor}`);
    gameSeq.push(rdcolor);
    gameFlash(rdbtn);
};

for (btn of btns) {
    btn.addEventListener("click",btnpress);
};

function check(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        heading2.innerHTML = `Game over! Your Score <b>${level}</b> <br> Press any key to restart the game`
        reset();
    }
}

function btnpress(){
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length-1);
}

function reset(){
    level = 0;
    gameSeq =[];
    userSeq = [];
    started = false;
}