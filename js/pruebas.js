function playResults(){
    const playerPlay = playerChoice.value;
    const cpuPlay = randomChoice();
    const plays = ["rock", "paper", "scissors"];

    if(playerPlay === cpuPlay){
        //
        messageResult.innerHTML = `You read my mind!`
    }
    if ((playerPlay === plays[0] && cpuPlay === plays[3]) || (playerPlay === plays[1] && cpuPlay === plays[0]) || (playerPlay === plays[2] && cpuPlay === plays[1])){
        playerCount += 1
        messageResult.innerHTML = `You win!`

    }else{
        cpuCount += 1
        messageResult.innerHTML = `You lose!`
    } 
}
const playerScore = document.querySelector(".js_player_score")
const cpuScore = document.querySelector(".js_CPU_score")
let playerCount = 0;
let cpuCount = 0;

function scoreboard(){
    playResults();
    playerScore.innerHTML = `${playerCount}`;
    cpuScore.innerHTML = `${cpuCount}`
}