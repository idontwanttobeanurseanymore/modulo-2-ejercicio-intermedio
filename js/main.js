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
    const cpuPlay = plays[Math.floor(Math.random() * 3)];
    if (cpuPlay === 0){
        cpuPlay = "rock"
    }else if (cpuPlay === 1){
        cpuPlay = "paper"
    }else if(cpuPlay === 2){
        cpuPlay = "scissors"
    }
    return cpuPlay
}

function playResults(){
    const playerPlay = playerChoice.value;
    const cpuPlay = randomChoice();
    if (!playerPlay) {
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
    //que aparezca cuando playerCount + cpuCount = 10??? Y si es empate???
    //classList.contains(.collapsed) +add/remove   
    playerCount = 0;
    cpuCount = 0;
    scoreboard();
    messageResult.innerHTML = "New game!";
});
