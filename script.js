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

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer win!");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer win!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer win!");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);