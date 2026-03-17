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

/*
<div class="js_options">
            <form class="js_player_options">
                <label for="js_player_choice">
                    <select id="js_player_choice" name="js_player_choice" class="js_player_choice">
                        <option value="">...</option>
                        <option value="rock">Rock</option>
                        <option value="paper">Paper</option>
                        <option value="scissors">Scissors</option>
                    </select>
                </label>
            </form>
        </div>
*/

/*
document.querySelector('.js_btn_rock').addEventListener('click', () => {
   results()
   scoreboard()
});
*/