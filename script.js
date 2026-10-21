let humanScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let ties = 0; 

const btnChoices = document.querySelectorAll('.btn')
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

btnChoices.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerChoice = btn.id;
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });
});

reset.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    ties = 0;

    btnChoices.forEach((btn) => {
        btn.style.display = "inline-block";
    });
    
    reset.style.display = "none";
    results.textContent = `Human: ${humanScore} - Computer ${computerScore}`;

});

function playRound(humanChoice, computerChoice) {
    let roundMessage = "";

    if (humanChoice === computerChoice) {
        ties++;
        roundMessage = "It's a tie!";
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        roundMessage = "Computer win!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        roundMessage = "You win!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        roundMessage = "You win!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        roundMessage = "Computer win!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        roundMessage = "You win!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        roundMessage = "Computer win!";
    }

    results.textContent = `Human: ${humanScore} - Computer: ${computerScore}\n${roundMessage}`;

    if (humanScore === 5 || computerScore === 5) {
        btnChoices.forEach((btn) => {
            btn.style.display = "none";
        })
        
        reset.style.display = "block";
        
        if (humanScore === 5) {
            results.textContent = "You won the game! Want to play again?";
        } else {
            results.textContent = "The computer won the game! Want to play again?";
        }
    }
}