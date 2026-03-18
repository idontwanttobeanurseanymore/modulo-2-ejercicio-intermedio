'use strict';
//QUERY-SELECTOR
const userBtn = document.querySelector(".js_user_btn")
const rockBtn = document.querySelector('.js_btn_rock');
const paperBtn = document.querySelector('.js_btn_paper');
const scissorsBtn = document.querySelector('.js_btn_scissors');
const scoreboardBox = document.querySelector('.js_scoreboard')
const playBtn = document.querySelector(".js_playBtn");
const replayBtn = document.querySelector(".js_replayBtn")
const playerScore = document.querySelector(".js_player_score")
const cpuScore = document.querySelector(".js_CPU_score");
const messagecpuResult = document.querySelector(".js_message_cpuResult")
const messageResult = document.querySelector(".js_message_result");
const plays = ["rock", "paper", "scissors"];

//DATA
let count = 0;
let playerCount = 0;
let cpuCount = 0;

//FUNCTIONS
function randomChoice() {
    return plays[Math.floor(Math.random() * 3)];
}
function gameplayRock() {
    const cpuPlay = randomChoice()
    if (cpuPlay === "rock") {
        messagecpuResult.innerHTML = `My choice: ${cpuPlay}`
        messageResult.innerHTML = `You read my mind!`
    } else if (cpuPlay === "paper") {
        messagecpuResult.innerHTML = `My choice: ${cpuPlay}`
        cpuCount += 1
        messageResult.innerHTML = `You lose!`
    } else if (cpuPlay === "scissors") {
        messagecpuResult.innerHTML = `My choice: ${cpuPlay}`
        playerCount += 1
        messageResult.innerHTML = `You win!`
    }
}
function gameplayPaper() {
    const cpuPlay = randomChoice()
    if (cpuPlay === "paper") {
        messagecpuResult.innerHTML = `My choice: ${cpuPlay}`
        messageResult.innerHTML = `You read my mind!`
    } else if (cpuPlay === "rock") {
        playerCount += 1
        messagecpuResult.innerHTML = `My choice: ${cpuPlay}`
        messageResult.innerHTML = `You win!`
    } else if (cpuPlay === "scissors") {
        cpuCount += 1
        messagecpuResult.innerHTML = `My choice: ${cpuPlay}`
        messageResult.innerHTML = `You lose!`
    }
}
function gameplayScissors() {
    const cpuPlay = randomChoice()
    if (cpuPlay === "scissors") {
        messagecpuResult.innerHTML = `My choice: ${cpuPlay}`
        messageResult.innerHTML = `You read my mind!`
    } else if (cpuPlay === "rock") {
        messagecpuResult.innerHTML = `My choice: ${cpuPlay}`
        cpuCount += 1
        messageResult.innerHTML = `You lose!`
    } else if (cpuPlay === "paper") {
        messagecpuResult.innerHTML = `My choice: ${cpuPlay}`
        playerCount += 1
        messageResult.innerHTML = `You win!`
    }
}
function scoreboard() {
    playerScore.innerHTML = `${playerCount}`;
    cpuScore.innerHTML = `${cpuCount}`
}
//EVENTS
rockBtn.addEventListener("click", () => {
    count++
    gameplayRock();
    scoreboard();
    scoreboardBox.classList.remove('collapsed');
    if (count >= 10) {
        userBtn.classList.add('collapsed');
        replayBtn.classList.remove('collapsed');
        messagecpuResult.classList.add('collapsed');
        if (playerCount > cpuCount) {
            messageResult.innerHTML = "You win!";
        } else {
            messageResult.innerHTML = "Game over!";
        }
    }
});
paperBtn.addEventListener("click", () => {
    count++
    gameplayPaper();
    scoreboard();
    scoreboardBox.classList.remove('collapsed');
    if (count >= 10) {
        userBtn.classList.add('collapsed');
        replayBtn.classList.remove('collapsed');
        messagecpuResult.classList.add('collapsed');
         if (playerCount > cpuCount) {
            messageResult.innerHTML = "You win!";
        } else {
            messageResult.innerHTML = "Game over!";
        }
    }
});
scissorsBtn.addEventListener("click", () => {
    count++
    gameplayScissors();
    scoreboard();
    scoreboardBox.classList.remove('collapsed');
    if (count >= 10) {
        userBtn.classList.add('collapsed');
        replayBtn.classList.remove('collapsed');
        messagecpuResult.classList.add('collapsed');
         if (playerCount > cpuCount) {
            messageResult.innerHTML = "You win!";
        } else {
            messageResult.innerHTML = "Game over!";
        }
    }
});

//PLAY-REPLAY
playBtn.addEventListener('click', () => {
    userBtn.classList.remove('collapsed');
    playBtn.classList.add('collapsed');
});

replayBtn.addEventListener("click", () => {
    playerCount = 0;
    cpuCount = 0;
    count = 0;
    scoreboard();
    messageResult.innerHTML = "";
    messagecpuResult.innerHTML = "";
    userBtn.classList.remove('collapsed');
    replayBtn.classList.add('collapsed')
});

/*

*/
