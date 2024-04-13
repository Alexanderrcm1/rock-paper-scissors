function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    return rps[ (Math.floor(Math.random() * rps.length))];

}

function playGame() {
    let player = 0;
    let computer = 0;
    let outcome;

    const buttons = document.querySelector("#buttons");
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    const container = document.querySelector("#container");
    const playerStats = document.createElement("div");
    const computerStats = document.createElement("div");
    const gameStats = document.createElement("div");

    playerStats.textContent = "Player Score: 0";
    computerStats.textContent = "Computer Score: 0";

    container.appendChild(playerStats);
    container.appendChild(computerStats);
    container.appendChild(gameStats);


    rockButton.addEventListener("click", () => {
        if (player === 5) {
            gameStats.textContent = "Congratz!! You won the game!!"
            return;
        }
        else if (computer === 5) {
            gameStats.textContent = "Sorry....Computer won the game!!"
            return;
        }
        else if (player === 5 && computer === 5) {
            gameStats.textContent = "The game is a tie!! Play again?"
            return;
        }
        let computerSelection = getComputerChoice()
        console.log(computerSelection)
        playerSelection = "rock";
        playRound(playerSelection, computerSelection);
        outcome = playRound(playerSelection,computerSelection);

        if (outcome == "Player Wins!") {
            player++
            computerStats.textContent = `Computer Score: ${computer} | (${computerSelection})`;
            playerStats.textContent= `Player Score: ${player} | (${playerSelection})`;
            gameStats.textContent = "Player wins this round!"
        }
        else if (outcome == "Computer Wins!") {
            computer++
            computerStats.textContent = `Computer Score: ${computer} | (${computerSelection})`;
            playerStats.textContent= `Player Score: ${player} | (${playerSelection})`
            gameStats.textContent = "Computer wins this round!"
        }
        else {
            player++
            computer++
            computerStats.textContent = `Computer Score: ${computer} | (${computerSelection})`;
            playerStats.textContent= `Player Score: ${player} | (${playerSelection})`
            gameStats.textContent = "It's a tie!"
        }
    });
    
    paperButton.addEventListener("click", () => {
        if (player === 5) {
            gameStats.textContent = "Congratz!! You won the game!!"
            return;
        }
        else if (computer === 5) {
            gameStats.textContent = "Sorry....Computer won the game!!"
            return;
        }
        else if (player === 5 && computer === 5) {
            gameStats.textContent = "The game is a tie!! Play again?"
            return;
        }
        let computerSelection = getComputerChoice()
        playerSelection = "paper";
        console.log(playRound(playerSelection, computerSelection));
        outcome = playRound(playerSelection,computerSelection);

        if (outcome == "Player Wins!") {
            player++
            computerStats.textContent = `Computer Score: ${computer}`;
            playerStats.textContent= `Player Score: ${player}`;
            gameStats.textContent = "Player wins this round!"
        }
        else if (outcome == "Computer Wins!") {
            computer++
            computerStats.textContent = `Computer Score: ${computer}`;
            playerStats.textContent= `Player Score: ${player}`;
            gameStats.textContent = "Computer wins this round!"
        }
        else {
            player++
            computer++
            computerStats.textContent = `Computer Score: ${computer}`;
            playerStats.textContent= `Player Score: ${player}`;
            gameStats.textContent = "It's a tie!"
        }
    });
    
    scissorsButton.addEventListener("click", () => {
        if (player === 5) {
            gameStats.textContent = "Congratz!! You won the game!!"
            return;
        }
        else if (computer === 5) {
            gameStats.textContent = "Sorry....Computer won the game!!"
            return;
        }
        else if (player === 5 && computer === 5) {
            gameStats.textContent = "The game is a tie!! Play again?"
            return;
        }
        let computerSelection = getComputerChoice()
        playerSelection = "scissors";
        playRound(playerSelection, computerSelection);
        outcome = playRound(playerSelection,computerSelection);

        if (outcome == "Player Wins!") {
            player++
            computerStats.textContent = `Computer Score: ${computer}`;
            playerStats.textContent= `Player Score: ${player}`;
            gameStats.textContent = "Player wins this round!"
        }
        else if (outcome == "Computer Wins!") {
            computer++
            computerStats.textContent = `Computer Score: ${computer}`;
            playerStats.textContent= `Player Score: ${player}`;
            gameStats.textContent = "Computer wins this round!"
        }
        else {
            player++
            computer++
            computerStats.textContent = `Computer Score: ${computer}`;
            playerStats.textContent= `Player Score: ${player}`;
            gameStats.textContent = "It's a tie!"
        }
    });
        
    function playRound (playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return("Tie");
        }
        else if (
                (playerSelection === "rock" && computerSelection === "scissors") || 
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")
                ){
            return("Player Wins!");
        }
        else {
            return ("Computer Wins!");
        }}
}
playGame();


