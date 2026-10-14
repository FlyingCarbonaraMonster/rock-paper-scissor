function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Pick your move. Type rock, paper or scissors:");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
let ties = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        ties++;
    }
}