//Variables
const playerChoice = document.querySelector(".js_player_choice");
const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")

let playerResult = document.querySelector(".js_player_result");
let cpuResult = document.querySelector(".js_CPU_result");
let messageResult = document.querySelector(".js_result_message");

//funciones
//eleccion de un número al azar

function randomChoice(number){
    number = Math.floor(Math.random()*10);
    if (number <= 3){
        //0, 1, 2, 3
        cpuResult = 1 //rock
    }else if (number <=6){
        //4, 5, 6
        cpuResult = 2 //paper
    }else if(number <= 9){
        //7, 8, 9
        cpuResult = 3 //scissors
    }return cpuResult
}
//console.log(randomChoice()) FUNCIONA 
/*
        <div>
            <p class="js_player_result"></p>
            <p class="js_CPU_results"></p>
            <p class="js_message_results"></p>
        </div>

*/
function results(playerChoice, cpuResult){
    if(playerChoice = cpuResult){
    playerResult = "";
    cpuResult = "";
    messageResult = "¡Ha sido empate!"
    } else if(playerChoice != cpuResult){
        //piedra -> 1 gana a 3
        //papel -> 2 gana a 1
        //tijeras -> 3 gana a 2
        if(playerChoice = 1){
            playerResult = "Has elegido piedra";
            if(cpuResult = 2){
                cpuResult = "He elegido papel";
                messageResult = "¡Yo gano!"
            }else if(cpuResult = 3){
                cpuResult = "He elegido tijeras";
                messageResult = "¡Tú ganas!"
            }
        }
        if(playerChoice = 2){
            playerResult = "Has elegido papel";
            if(cpuResult = 3){
                cpuResult = "He elegido tijeras";
                messageResult = "¡Yo gano!";
            }else if(cpuResult = 1){
                cpuResult = "He elegido piedra";
                messageResult = "¡Tú ganas!";
            }
        }
        if(playerChoice = 3){
            playerResult = "Has elegido tijeras";
            if(cpuResult = 1){
                cpuResult = "He elegido piedra"
                messageResult = "¡Yo gano!"
            }else if(cpuResult = 2){
                cpuResult = "He elegido papel"
                messageResult = "¡Tú ganas!"
            }
        }
    }
}
console.log(results(1, 3))
/*
//eventos
    playBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        
    })
    replayBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        //borrar todo
    })

//partida acaba en 10 movimientos
*/