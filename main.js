'use strict';
//QUERY-SELECTOR
const playerChoice = document.querySelector(".js_player_choice");
const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")

//DATA
let playerPlay = playerChoice.value
let playerResult = document.querySelector(".js_player_result");
let cpuResult = document.querySelector(".js_CPU_result");
let messageResult = document.querySelector(".js_message_result");

//FUNCTIONS
function randomChoice(number){
    number = Math.floor(Math.random()*10);
    if (number <= 3){
        //0, 1, 2, 3
        cpuResult = "rock"
    }else if (number <=6){
        //4, 5, 6
        cpuResult = "paper"
    }else if(number <= 9){
        //7, 8, 9
        cpuResult = "scissors"
    }
}
function playResults(playerPlay, cpuResult){
    randomChoice();
    if(playerPlay = cpuResult){
    messageResult.innerHTML = `Elegiste ${playerPlay} y yo ${cpuResult}, así que... ¡Empatamos!`
    }else{
        if(playerPlay = "rock"){
            if(cpuResult = "paper"){
                messageResult.innerHTML = `Elegiste ${playerPlay} y yo ${cpuResult}, así que...¡Yo gano!`
            }else if(cpuResult = "scissors"){
                messageResult.innerHTML = `Elegiste ${playerPlay} y yo ${cpuResult}, así que...¡Tú ganas!`
            }
        }if(playerPlay = "paper"){
            if(cpuResult = "scissors"){
                messageResult.innerHTML = `Elegiste ${playerPlay} y yo ${cpuResult}, así que...¡Yo gano!`;
            }else if(cpuResult = "rock"){
                messageResult.innerHTML = `Elegiste ${playerPlay} y yo ${cpuResult}, así que...¡Tú ganas!`;
            }
        }if(playerPlay = "scissors"){
            if(cpuResult = "rock"){
                messageResult.innerHTML = `Elegiste ${playerPlay} y yo ${cpuResult}, así que...¡Yo gano!`
            }else if(cpuResult = "paper"){
                messageResult.innerHTML = `Elegiste ${playerPlay} y yo ${cpuResult}, así que...¡Tú ganas!`
            }
        }
    }
}
//EVENTS' FUNCTIONS
const clickPlayBtn = () => {
    playResults()
}
//eventos
clickPlayBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    
})
    
/*
replayBtn.addEventListener('click', () => {
    variable.classList.contains(.collapsed) +add/remove       
//cuando juege 10 movimientos, mostrar
})

//partida acaba en 10 movimientos
*/