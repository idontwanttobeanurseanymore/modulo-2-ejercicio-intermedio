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
    const plays = ["rock", "paper", "scissors"]; // 0, 1, 2

    playerResult.innerHTML = `${playerPlay}`;
    cpuResult.innerHTML = `${cpuPlay}`;
    choicesMessage.innerHTML = `${playerPlay} VS ${cpuPlay}`;
    
    if(playerPlay === cpuPlay){
        messageResult.innerHTML = `You read my mind!`
    }else if ((playerPlay === plays[0] && cpuPlay === plays[2]) || (playerPlay === plays[1] && cpuPlay === plays[0]) || (playerPlay === plays[2] && cpuPlay === plays[1])){
        playerCount += 1
        messageResult.innerHTML = `You win!`
    }else{
        cpuCount += 1
        messageResult.innerHTML = `You lose!`
    } //por qué suma a veces dos????
}

function scoreboard(){
    playResults();
    playerScore.innerHTML = `Your points: ${playerCount}`;
    cpuScore.innerHTML = `My points: ${cpuCount}`
}

playBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  playResults();
  scoreboard();
});

/*
Cosas pendientes:
    - mostrar replayBtn a los 10 movimientos (Empate 5-5?);
    - scoreboard (almacena las jugadas ganadas por cada jugador) ALGO FALLA


replayBtn.addEventListener('click', () => {
    variable.classList.contains(.collapsed) +add/remove       
//cuando juege 10 movimientos, mostrar
})

*/
/*
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
                
                messageResult.innerHTML = `You lose!`
            }else if(cpuPlay === "scissors"){
                
                messageResult.innerHTML = `You win!`
            }
        }if(playerPlay === "paper"){
            if(cpuPlay === "scissors"){
                
                messageResult.innerHTML = `You lose!`;
            }else if(cpuPlay === "rock"){
                
                messageResult.innerHTML = `You win!`;
            }
        }if(playerPlay === "scissors"){
            if(cpuPlay === "rock"){
                
                messageResult.innerHTML = `You lose!`
            }else if(cpuPlay === "paper"){
                
                messageResult.innerHTML = `You win!`
            }
        }
    }
}
*/