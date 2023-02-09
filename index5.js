//This code is setting up event listeners for buttons that represent the game choices of "rock", "paper", and "scissors". When one of these buttons is clicked, it sets the "playerSelection" variable to the corresponding choice and then calls the "runGame()" function. The code is also setting up the function to be executed when the "window.onload" event fires, which typically happens when the page has finished loading.
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
//variables to keep game score and player selection
let playerPoints = 0;
let computerPoints = 0;
let playerSelection = '';

//fuction that allows to computer randomly choose one of the options and display its choice on html
function getComputerChoice () {
    let weapons = ["paper", "rock", "scissors"];
    let useWeapon = weapons [Math.floor(Math.random() * weapons.length)];
    let displayComputerChoice = document.querySelector("#computerChoice");
    displayComputerChoice.innerHTML = "Computer chooses " + useWeapon;
    return useWeapon
}

// This function compares the player's and computer's choices and returns a string that indicates the outcome of the game: "Tie!", "You win!", or "Computer win!". The outcome is determined based on the rock-paper-scissors rules, which state that rock beats scissors, scissors beat paper, and paper beats rock.
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

// The function runGame is a function that implements a single round of a Rock-Paper-Scissors game. It does the following:

// 1 - Calls the function getComputerChoice to get the computer's selection (rock, paper, or scissors)
// 2 - Calls the function roundOne with the player's selection and computer's selection as arguments to determine the result of the round
// 3 - Increases the player's or computer's points based on the round result
// 4 - Displays the result of the round and the score on the page using the element with the id "result"
// 5 - If either the player or the computer has reached 3 points, the function declares the winner and resets the player's and computer's points.
// 6 - Restart buttom add listener event at the end so the game can be reset
function runGame() {
    let computerSelection = getComputerChoice();
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
    let resultDisplay = document.querySelector("#result");
    resultDisplay.innerHTML = "Round Result: " + roundResult + "<br>" + "Player: " + playerPoints + " Computer: " + computerPoints;

    if (playerPoints >= 3 || computerPoints >= 3) {
        if (playerPoints > computerPoints) {
            resultDisplay.innerHTML = "Round Result: " + roundResult + "<br>" + "You win the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer";
        } else if (computerPoints > playerPoints) {
            resultDisplay.innerHTML = "Round Result: " + roundResult + "<br>" + "Computer wins the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer";
        }
        playerPoints = 0;
        computerPoints = 0;
    }
    const restartButton = document.querySelector("#restartButton");
    if (restartButton) {
        restartButton.addEventListener("click", function() {
        playerPoints = 0;
        computerPoints = 0;
        document.querySelector("#result").innerHTML = "";
        document.querySelector("#computerChoice").innerHTML = "";
        });
    }
}