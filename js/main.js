'use strict';
//QUERY-SELECTOR
const playerChoice = document.querySelector(".js_player_choice");
const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")
const playerScore = document.querySelector(".js_player_score")
const cpuScore = document.querySelector(".js_CPU_score")

//DATA
let playerResult = document.querySelector(".js_player_result");
let cpuResult = document.querySelector(".js_CPU_result");
let messageResult = document.querySelector(".js_message_result");
let choicesMessage = document.querySelector(".choices")
let playerCount = 0;
let cpuCount = 0;

//FUNCTIONS

function randomChoice(){
    const plays = ["rock", "paper", "scissors"];
    return plays[Math.floor(Math.random() * 3)];
}

function playResults(){
    const playerPlay = playerChoice.value;
    const cpuPlay = randomChoice();

    if (!playerPlay) { // encadenar o no encadenar??
        messageResult.innerHTML = "Choose an option!";
    }else if(playerPlay === cpuPlay){
        choicesMessage.innerHTML = `${playerPlay} VS ${cpuPlay}`;
        messageResult.innerHTML = `You read my mind!`
    }else if ((playerPlay === "rock" && cpuPlay === "scissors") || (playerPlay === "paper" && cpuPlay === "rock") || (playerPlay === "scissors" && cpuPlay === "paper")){
        playerCount += 1
        choicesMessage.innerHTML = `${playerPlay} VS ${cpuPlay}`;
        messageResult.innerHTML = `You win!`
    }else{
        cpuCount += 1
        choicesMessage.innerHTML = `${playerPlay} VS ${cpuPlay}`;
        messageResult.innerHTML = `You lose!`
    }
}

function scoreboard(){
        playerScore.innerHTML = `Your points: ${playerCount}`;
        cpuScore.innerHTML = `My points: ${cpuCount}`
}
//EVENTS

playBtn.addEventListener("click", (ev) => { //cada vez que pulso el botón, select = "" y choicesMessage.innerHTML = ""???
    ev.preventDefault();
    playResults();
    scoreboard();
    
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
        btn.classList.toggle(".collapsed")
    }
*/