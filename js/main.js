'use strict';
//QUERY-SELECTOR
const userBtn = document.querySelector(".js_user_btn")
const rockBtn = document.querySelector('.js_btn_rock');
const paperBtn = document.querySelector('.js_btn_paper');
const scissorsBtn = document.querySelector('.js_btn_scissors');
const scoreboardBox = document.querySelector('.js_scoreboard')
const plays = ["rock", "paper", "scissors"];

const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")
const playerScore = document.querySelector(".js_player_score")
const cpuScore = document.querySelector(".js_CPU_score")

//DATA
let messageResult = document.querySelector(".js_message_result");
let playerCount = 0;
let cpuCount = 0;

//FUNCTIONS

function randomChoice(){
    return plays[Math.floor(Math.random() * 3)];
}
function gameplayRock(){
    const cpuPlay = randomChoice()
    if(cpuPlay === "rock"){
        //tie
        messageResult.innerHTML = `You read my mind!`
    }else if(cpuPlay === "paper"){
        //You lose!
        cpuCount += 1
        messageResult.innerHTML = `You lose!`
    }else if(cpuPlay === "scissors"){
        //You win!
        playerCount += 1
        messageResult.innerHTML = `You win!`
    }
}
function gameplayPaper(){
    const cpuPlay = randomChoice()
    if(cpuPlay === "paper"){
        messageResult.innerHTML = `You read my mind!`
        //Tie
    } else if(cpuPlay === "rock"){
        playerCount += 1
        messageResult.innerHTML = `You win!`
        //You win! 
    }else if(cpuPlay === "scissors"){
        cpuCount += 1
        messageResult.innerHTML = `You lose!`
        //You lose!
    }
}
function gameplayScissors(){
    const cpuPlay = randomChoice()
    if(cpuPlay === "scissors"){
        //Tie
        messageResult.innerHTML = `You read my mind!`
    }else if(cpuPlay === "rock"){
        //You lose!
        cpuCount += 1
        messageResult.innerHTML = `You lose!`
    }else if(cpuPlay === "paper"){
        playerCount += 1
        messageResult.innerHTML = `You win!`
        //You win!
    }
}

function scoreboard(){
    playerScore.innerHTML = `Your points: ${playerCount}`;
    cpuScore.innerHTML = `My points: ${cpuCount}`
}
//EVENTS

rockBtn.addEventListener("click", () => { 
    gameplayRock();
    scoreboard();
    scoreboardBox.classList.remove('collapsed');
});
paperBtn.addEventListener("click", () => { 
    gameplayPaper();
    scoreboard();
    scoreboardBox.classList.remove('collapsed');
});
scissorsBtn.addEventListener("click", () => { 
    gameplayScissors();
    scoreboard();
    scoreboardBox.classList.remove('collapsed');
});
//PLAY-REPLAY
playBtn.addEventListener('click', () => {
    userBtn.classList.remove('collapsed');
    playBtn.classList.add('collapsed');
    
});

replayBtn.addEventListener("click", () => {
    playerCount = 0;
    cpuCount = 0;
    scoreboard();
    messageResult.innerHTML = "Game over!!";
});

/*
if (playerCount + cpuCount === 10) {
        messageResult.innerHTML = "Game over!";
    
    }
Pendientes:
    - Que aparezca (y funcione) replayBtn
    

*/
