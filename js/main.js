'use strict';
//QUERY-SELECTOR
const userBtn = document.querySelector(".js_user_btn")
const rockBtn = document.querySelector('.js_btn_rock');
const paperBtn = document.querySelector('.js_btn_paper');
const scissorsBtn = document.querySelector('.js_btn_scissors');
const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")
const scoreboardBox = document.querySelector('.js_scoreboard')
const playerScore = document.querySelector(".js_player_score")
const cpuScore = document.querySelector(".js_CPU_score");
const messagesBox = document.querySelector('.js_messages_box');
const messagecpu = document.querySelector(".js_message_cpu")
const message = document.querySelector(".js_message");
const gameh2 = document.querySelector('.js_h2');
const plays = ["rock", "paper", "scissors"];

//DATA
gameh2.innerHTML = 'Can you beat me?';
let count = 0;
let playerCount = 0;
let cpuCount = 0;

//FUNCTIONS
function randomChoice() {
    return plays[Math.floor(Math.random() * 3)];
}

function gameplay(playerPlay){
    const cpuPlay = randomChoice();
    messagecpu.innerHTML = `My choice: ${cpuPlay}`;
    if (cpuPlay === playerPlay){
        message.innerHTML = `It's a tie!`
    }else if (cpuPlay === "rock" && playerPlay === "paper"){
        playerCount++
        message.innerHTML = `You win!`
    }else if(cpuPlay === "paper" && playerPlay === "scissors"){
        playerCount++
        message.innerHTML = `You win!`
    }else if(cpuPlay === "scissors" && playerPlay === "rock"){
        playerCount++
        message.innerHTML = `You win!`
    }else{
        cpuCount++
        message.innerHTML = `You lose!`
        }
    }

function scoreboard() {
    playerScore.innerHTML = `${playerCount}`;
    cpuScore.innerHTML = `${cpuCount}`
}

//EVENTS
//PLAY-REPLAY
playBtn.addEventListener('click', () => {
    userBtn.classList.remove('collapsed');
    playBtn.classList.add('collapsed');
    messagesBox.classList.remove('collapsed');
    messagecpu.classList.remove('collapsed');;
    message.innerHTML = ``;
    scoreboardBox.classList.remove('collapsed');
    gameh2.classList.remove('collapsed')
    gameh2.innerHTML = `Shoot!`
    playerScore.innerHTML = `${playerCount}`;
    cpuScore.innerHTML = `${cpuCount}`
    
});

replayBtn.addEventListener("click", () => {
    playerCount = 0;
    cpuCount = 0;
    count = 0;
    gameh2.classList.remove('collapsed')
    gameh2.innerHTML = `Try again?`
    playBtn.classList.remove('collapsed');
    replayBtn.classList.add('collapsed')
    scoreboardBox.classList.add('collapsed')
    messagesBox.classList.add('collapsed')
});

rockBtn.addEventListener('click', () =>{
    count++;
    gameh2.classList.add('collapsed');
    gameplay("rock");
    scoreboard();
    scoreboardBox.classList.remove('collapsed');
    messagesBox.classList.remove('collapsed');
    if(count >= 10){
        userBtn.classList.add('collapsed');
        replayBtn.classList.remove('collapsed');
        messagecpu.classList.add('collapsed');
        if (playerCount > cpuCount){
            message.innerHTML = "Well played!";
        }else {
            message.innerHTML = "Game over!";
        }
    }
})

paperBtn.addEventListener("click", () => {
    count++;
    gameh2.classList.add('collapsed');
    gameplay("paper");
    scoreboard();
    scoreboardBox.classList.remove('collapsed');
    messagesBox.classList.remove('collapsed');
    if(count >= 10){
        userBtn.classList.add('collapsed');
        replayBtn.classList.remove('collapsed');
        messagecpu.classList.add('collapsed');
        if (playerCount > cpuCount){
            message.innerHTML = "Well played!";
        }else {
            message.innerHTML = "Game over!";
        }
    }
})

scissorsBtn.addEventListener("click", () => {
    gameplay("scissors");
    count++;
    gameh2.classList.add('collapsed');
    scoreboard();
    scoreboardBox.classList.remove('collapsed');
    messagesBox.classList.remove('collapsed');
    if(count >= 10){
        userBtn.classList.add('collapsed');
        replayBtn.classList.remove('collapsed');
        messagecpu.classList.add('collapsed');
        if (playerCount > cpuCount){
            message.innerHTML = "Well played!";
        }else {
            message.innerHTML = "Game over!";
        }
    }
})
