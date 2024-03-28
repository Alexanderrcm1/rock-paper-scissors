function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    return rps[ (Math.floor(Math.random() * rps.length))];

}
let computerSelection = getComputerChoice()
console.log(computerSelection)



let playerSelection = prompt("Choose Rock, Paper or Scissors!");

playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

function playRound (playerSelection, computerSelection) {

}