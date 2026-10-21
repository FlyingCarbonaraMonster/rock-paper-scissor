let humanScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let ties = 0; 

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const reset = document.querySelector('#reset');

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

rock.addEventListener('click', () => {
    playerChoice = "rock";
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

paper.addEventListener('click', () => {
    playerChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

scissors.addEventListener('click', () => {
    playerChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

reset.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    ties = 0;
    
    rock.style.display = "inline-block";
    paper.style.display = "inline-block";
    scissors.style.display = "inline-block";
    reset.style.display = "none";
    results.textContent = `Human: ${humanScore} - Computer ${computerScore}`;

});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        ties++;
        results.textContent = `Human: ${humanScore} - Computer ${computerScore}\nIt's a tie!`;
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        results.textContent = `Human: ${humanScore} - Computer ${computerScore}\nComputer win!`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        results.textContent = `Human: ${humanScore} - Computer ${computerScore}\nYou win!`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        results.textContent = `Human: ${humanScore} - Computer ${computerScore}\nYou win!`;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        results.textContent = `Human: ${humanScore} - Computer ${computerScore}\nComputer win!`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        results.textContent = `Human: ${humanScore} - Computer ${computerScore}\nYou win!`;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        results.textContent = `Human: ${humanScore} - Computer ${computerScore}\nComputer win!`;
    }

    if (humanScore === 5) {
        results.textContent = "You won the game! Want to play again?";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        reset.style.display = "block";
    } else if (computerScore === 5) {
        results.textContent = "The computer won the game! Want to play again?";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        reset.style.display = "block";
    }
}