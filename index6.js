const getPlayerSelection = window.onload = function() {
    let rockBtn = document.querySelector("#rock");
    let paperBtn = document.querySelector("#paper");
    let scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", function() {
        playerSelection = "rock";
        runGame();
    });

    paperBtn.addEventListener("click", function() {
        playerSelection = "paper";
        runGame();
    });

    scissorsBtn.addEventListener("click", function() {
        playerSelection = "scissors";
        runGame();
    });
}

let playerPoints = 0;
let computerPoints = 0;
let playerSelection = '';

function getComputerChoice () {
    let weapons = ["paper", "rock", "scissors"]
    let useWeapon = weapons [Math.floor(Math.random() * weapons.length)]
    return useWeapon
}

function roundOne(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "Computer win! " + computerSelection + " beats " + playerSelection;
    }
}


console.log(playerPoints)
console.log(computerPoints)

for (let i = 0; i < 50; i++) {
    let computerSelection = getComputerChoice();
    let roundResult = roundOne(playerSelection, computerSelection);
    let resultDisplay = document.querySelector("#result");
    resultDisplay.innerHTML = "Round Result: " + roundResult + "<br>" + "Player: " + playerPoints + " Computer: " + computerPoints;
    if (playerPoints >= 3 || computerPoints >= 3) {
        if (playerPoints > computerPoints) {
            resultDisplay.innerHTML = "You win the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer";
        } else if (computerPoints > playerPoints) {
            resultDisplay.innerHTML = "Computer wins the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer";
        }
        playerPoints = 0;
        computerPoints = 0;
    }
}

function gameScore() {
    let roundResult = roundOne(playerSelection, computerSelection);

    if (roundResult === 'You win! rock beats scissors' ||
        roundResult === 'You win! paper beats rock' ||
        roundResult === 'You win! scissors beats paper') {
        playerPoints++;
    } else if (roundResult === 'Computer win! rock beats scissors' ||
        roundResult === 'Computer win! paper beats rock' ||
        roundResult === 'Computer win! scissors beats paper') {
        computerPoints++;
    }
}

console.log(playerPoints)
console.log(computerPoints)