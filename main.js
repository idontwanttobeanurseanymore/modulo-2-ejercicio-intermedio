//Variables
const playerChoice = document.querySelector(".js_player_choice");
const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")
const playerResult = document.querySelector(".js_player_result");
const cpuResult = document.querySelector(".js_CPU_result");
const resultMessage = document.querySelector(".js_result_message");

//funciones
//eleccion del ordenador
function cpuChoice(max){
    let cpuResult = Math.ceil(Math.random()* max);
    if (cpuResult >= 3){
        cpuResult = "1"
    }else if (cpuResult >= 7){
        cpuResult = "2"
    }else{
        cpuResult = "3"
    }
}
console.log(cpuChoice(max))
//resultados 
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
//