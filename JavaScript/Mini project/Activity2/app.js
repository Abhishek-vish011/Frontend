let gameSeq = [];
let userSeq = [];

let btns = ["red","orange","blue","purple"];

let startUp = false;
let level = 0;

let head2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(startUp == false){
        console.log("Start")
        startUp = true;

        leveUp();
    }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  }, 250);
}

function leveUp(){
  userSeq = [];
    level++;
    head2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){
  if(userSeq[idx] == gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(leveUp, 1000);
    }
  }else{
    head2.innerHTML = `<b>Game Over!</b> Your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    highestScore(level);
    gameReset();
  }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userSeq.push(userColor));

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
  btn.addEventListener("click", btnPress);
}

function gameReset(){
  startUp = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

function highestScore(level){
  let score = 0;
  if(level>score){
    let head3 = document.querySelector("h3");
    head3.innerText = `Highest Score: ${level}`;
  }else{
    score = level;
    head3.innerText = `Highest Score: ${score}`;
  }
}

