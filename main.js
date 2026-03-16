//Variables
const playerChoice = document.querySelector(".js_player_choice");
const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")
//datos
let playerResult = document.querySelector(".js_player_result");
let cpuResult = document.querySelector(".js_CPU_result");
let messageResult = document.querySelector(".js_result_message");


//funciones

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
    }return cpuResult
}
//console.log(randomChoice()) 
//FUNCIONA 
function results(playerPlay, cpuResult){
    playerPlay = playerChoice.value
    if(playerPlay = cpuResult){
    messageResult = "¡Ha sido empate!"
    }else{
        if(playerPlay = "rock"){
            if(cpuResult = "paper"){
                messageResult = "¡Yo gano!"
            }else if(cpuResult = "scissors"){
                messageResult = "¡Tú ganas!"
            }
        }if(playerPlay = "rock"){

            if(cpuResult = "scissors"){
                messageResult = "¡Yo gano!";
            }else if(cpuResult = "rock"){
                messageResult = "¡Tú ganas!";
            }
        }
        if(playerPlay = "scissors"){
            if(cpuResult = "rock"){
                messageResult = "¡Yo gano!"
            }else if(cpuResult = 2){
                messageResult = "¡Tú ganas!"
            }
        }
    }
}
console.log(results())
/*
//eventos
    playBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        
    })
    replayBtn.addEventListener('click', () => {
        
        //cuando juege 10 movimientos, mostrar
    })

//partida acaba en 10 movimientos
*/