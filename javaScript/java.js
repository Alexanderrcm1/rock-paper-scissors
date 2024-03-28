function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    return rps[ (Math.floor(Math.random() * rps.length))];

}
let computerSelection = getComputerChoice()
console.log(computerSelection)



let playerSelection = prompt("Choose Rock, Paper or Scissors!");

playerSelection = playerSelection.toLowerCase();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return("Tie");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return("You Lose!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You Win!");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You Win!")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You Lose!")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You Lose!")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You Win!")
    }

}