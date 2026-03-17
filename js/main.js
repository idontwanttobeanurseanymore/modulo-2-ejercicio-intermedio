'use strict';
//QUERY-SELECTOR
const playerChoice = document.querySelector(".js_player_choice");
const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")

//DATA
let playerResult = document.querySelector(".js_player_result");
let cpuResult = document.querySelector(".js_CPU_result");
let messageResult = document.querySelector(".js_message_result");
let choicesMessage = document.querySelector(".choices")

let playerCount = 0;
let cpuCount = 0;

//FUNCTIONS
function randomChoice(number){
    number = Math.floor(Math.random()*10);
    let cpuPlay = cpuResult.value
    if (number <= 3){
        //0, 1, 2, 3
        cpuPlay = "rock"
    }else if (number <=6){
        //4, 5, 6
        cpuPlay = "paper"
    }else if(number <= 9){
        //7, 8, 9
        cpuPlay = "scissors"
    }
    return cpuPlay
}
function playResults(){
    const playerPlay = playerChoice.value;
    const cpuPlay = randomChoice();

    playerResult.innerHTML = `${playerPlay}`;
    cpuResult.innerHTML = `${cpuPlay}`;
    choicesMessage.innerHTML = `${playerPlay} VS ${cpuPlay}`;

    if(playerPlay === cpuPlay){
    messageResult.innerHTML = `You read my mind!`
    }else{
        if(playerPlay === "rock"){
            if(cpuPlay === "paper"){
                cpuCount++;
                messageResult.innerHTML = `You lose!`
            }else if(cpuPlay === "scissors"){
                playerCount++;
                messageResult.innerHTML = `You win!`
            }
        }if(playerPlay === "paper"){
            if(cpuPlay === "scissors"){
                cpuCount++;
                messageResult.innerHTML = `You lose!`;
            }else if(cpuPlay === "rock"){
                playerCount++;
                messageResult.innerHTML = `You win!`;
            }
        }if(playerPlay === "scissors"){
            if(cpuPlay === "rock"){
                cpuCount++;
                messageResult.innerHTML = `You lose!`
            }else if(cpuPlay === "paper"){
                playerCount++;
                messageResult.innerHTML = `You win!`
            }
        }
    }
}
playBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  playResults();
});

/*
replayBtn.addEventListener('click', () => {
    variable.classList.contains(.collapsed) +add/remove       
//cuando juege 10 movimientos, mostrar
})

Empate 5-5???
*/