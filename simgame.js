let userseq = [];
let gameseq = [];
let btns = ["yellow","red","green","purple"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    console.log("key was press")
    if(started==false){{
        console.log("game is started");
        started = true;

        levelUp();
    }}
});

function blink(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}


function levelUp(){
    userseq = [];
    level++;

    h2.innerText = `level : ${level}`;

    let randIndex = Math.floor(Math.random()*3);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    blink(randBtn);

}


function checkAns(idx){
    // console.log("curr level:" ,level);
    // let idx = level -1;
    if(userseq[idx] === gameseq[idx]){
        // console.log("same value");
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
        
    }
    else{
        h2.innerHTML = `Game Over ..<i> Your Score is </i> ${level}  <br> Press any key to start again `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
        
    }
}


function btnPress(){
    let btn = this;
    // console.log(this);
    blink(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
} 


let allBtn = document.querySelectorAll(".btn");

for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started = false;
    gameseq = [];
    userseq = [];
   level = 0;
}