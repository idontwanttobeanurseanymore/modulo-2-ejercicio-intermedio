//Variables
const playerChoice = document.querySelector(".js_player_choice");
const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")

let playerResult = document.querySelector(".js_player_result");
let cpuResult = document.querySelector(".js_CPU_result");
let resultMessage = document.querySelector(".js_result_message");

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
    }
}
/*
function results(){
    if(playerChoice = cpuResult){
        
        return "empate"
    }
    else if(playerChoice != cpuResult){
        //piedra -> 1 gana a 3
        //papel -> 2 gana a 1
        //tijeras -> 3 gana a 2
        if(playerChoice = 1){
            if(cpuResult = 2){
                return "oh no"
            }else if(cpuResult=3){
                return "tú si que sabes"
            }
        }
        if(playerChoice = 2){
            if(cpuResult = 3){
                return "oh no"
            }else if(cpuResult = 1){
                return "tú si que sabes"
            }
        }
        if(playerChoice = 3){
            if(cpuResult = 1){
                return "oh no"
            }else if(cpuResult = 2){
                return "tú si que sabes"
            }
        }
    }
}


//eventos
    playBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        cpuResult()
        results()
    })
    replayBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        //borrar todo
    })

//partida acaba en 10 movimientos
*/