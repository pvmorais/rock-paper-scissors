


// Function that can make a computer do a random selection
function getComputerChoice () {
    let weapons = ["paper", "rock", "scissors"]
    let useWeapon = weapons [Math.floor(Math.random() * weapons.length)]
    return useWeapon
}

// Function that can compare player selection and computer selection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        return 'win';
    } else {
        return 'lose';
    }
}

let playerPoints = 0;
let computerPoints = 0;

function gameScore(result) {
    if (result === 'win'){
        playerPoints++;
    } else if (result === 'lose'){
        computerPoints++;
    }
}

const resultsContainer = document.querySelector("#results");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

window.onload = function() {
    let rockBtn = document.querySelector("#rock");
    let paperBtn = document.querySelector("#paper");
    let scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", function() {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        gameScore(result);

        playerScore.textContent = playerPoints;
        computerScore.textContent = computerPoints;

        if (result === 'win') {
            resultsContainer.textContent = 'You win! Rock beats Scissors';
        } else if (result === 'tie') {
            resultsContainer.textContent = 'It is a tie!';
        } else {
            resultsContainer.textContent = 'You lose! Rock loses to Paper';
        }

        if (playerPoints === 3) {
            resultsContainer.textContent = 'You won the game!';
        } else if (computerPoints === 3) {
            resultsContainer.textContent = 'You lost the game!';
        }
    });

    paperBtn.addEventListener("click", function() {
        let playerSelection = "paper";
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        gameScore(result);

        playerScore.textContent = playerPoints;
        computerScore.textContent = computerPoints;

        if (result === 'win') {
            resultsContainer.textContent = 'You win! Paper beats Rock';
        } else if (result === 'tie') {
            resultsContainer.textContent = 'It is a tie!';
        } else {
            resultsContainer.textContent = 'You lose! Paper loses to Scissors';
        }

        if (playerPoints === 3) {
            resultsContainer.textContent = 'You won the game!';
        } else if (computerPoints === 3) {
            resultsContainer.textContent = 'You lost the game!';
        }
    });

    scissorsBtn.addEventListener("click", function() {
        let playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        gameScore(result);

        playerScore.textContent = playerPoints;
        computerScore.textContent = computerPoints;

        if (result === 'win') {
            resultsContainer.textContent = 'You win! Scissors beats Paper';
        } else if (result === 'tie') {
            resultsContainer.textContent = 'It is a tie!';
        } else {
            resultsContainer.textContent = 'You lose! Scissors loses to Rock';
        }

        if (playerPoints === 3) {
            resultsContainer.textContent = 'You won the game!';
        } else if (computerPoints === 3) {
            resultsContainer.textContent = 'You lost the game!';
        }
    });

}

