function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    return rps[ (Math.floor(Math.random() * rps.length))];

}

let player = 0;
let computer = 0;

function playGame() {
    for (let i = 1; i < 6; i++) {
        console.log("Round: " + i)

        let computerSelection = getComputerChoice()
        console.log(computerSelection)


        let playerSelection = prompt("Choose Rock, Paper or Scissors!");
        playerSelection = playerSelection.toLowerCase();

        function playRound (playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return("Tie");
            }
            else if (playerSelection === "rock" && computerSelection === "paper") {
                return("You Lose! Paper beats rock");
            }
            else if (playerSelection === "rock" && computerSelection === "scissors") {
                return("You Win! Rock beats scissors");
            }
            else if (playerSelection === "paper" && computerSelection === "rock") {
                return("You Win! Paper beats rock")
            }
            else if (playerSelection === "paper" && computerSelection === "scissors") {
                return("You Lose! Scissors beats paper")
            }
            else if (playerSelection === "scissors" && computerSelection === "rock") {
                return("You Lose! Rock beats scissors")
            }
            else if (playerSelection === "scissors" && computerSelection === "paper") {
                return("You Win! Scissors beats paper")
            }
        }
        let outcome = playRound(playerSelection,computerSelection);
        console.log(outcome)

        let win = outcome.includes("Win");
        if (win == true) {
            player++
        }
        else if (win == false) {
            computer++
        }
        console.log("Player: " + player)
        console.log("Computer: " + computer)
    }
    if (player > computer) {
        console.log("Player Wins!")
    }
    else if (player < computer) {
        console.log("Computer Wins!")
    }
}
playGame()
