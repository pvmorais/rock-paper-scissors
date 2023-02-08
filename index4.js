function getComputerChoice () {
    let weapons = ["paper", "rock", "scissors"]
    let useWeapon = weapons [Math.floor(Math.random() * weapons.length)]
    return useWeapon
}

function roundOne(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection)
        return true 
    } else {
        console.log('Computer win! ' + computerSelection + ' beats ' + playerSelection)
        return false 
    }
}

let playerPoints = 0
let computerPoints = 0

const getPlayerSelection = window.onload = function() {
    let rockBtn = document.querySelector("#rock");
    let paperBtn = document.querySelector("#paper");
    let scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", function() {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        let roundVictory = roundOne(playerSelection, computerSelection);
        if (roundVictory === true) {
          playerPoints++;
        } else if (roundVictory === false) {
          computerPoints++;
        }
        console.log("Player: " + playerPoints);
        console.log("Computer: " + computerPoints);
        if (playerPoints >= 3 || computerPoints >= 3) {
          if (playerPoints > computerPoints) {
            console.log("You win the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer");
          } else if (computerPoints > playerPoints) {
            console.log("Computer wins the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer");
          }
        }
      });

      paperBtn.addEventListener("click", function() {
        let playerSelection = "paper";
        let computerSelection = getComputerChoice();
        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        let roundVictory = roundOne(playerSelection, computerSelection);
        if (roundVictory === true) {
          playerPoints++;
        } else if (roundVictory === false) {
          computerPoints++;
        }
        console.log("Player: " + playerPoints);
        console.log("Computer: " + computerPoints);
        if (playerPoints >= 3 || computerPoints >= 3) {
          if (playerPoints > computerPoints) {
            console.log("You win the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer");
          } else if (computerPoints > playerPoints) {
            console.log("Computer wins the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer");
          }
        }
      });

      scissorsBtn.addEventListener("click", function() {
        let playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        let roundVictory = roundOne(playerSelection, computerSelection);
        if (roundVictory === true) {
          playerPoints++;
        } else if (roundVictory === false) {
          computerPoints++;
        }
        console.log("Player: " + playerPoints);
        console.log("Computer: " + computerPoints);
        if (playerPoints >= 3 || computerPoints >= 3) {
          if (playerPoints > computerPoints) {
            console.log("You win the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer");
          } else if (computerPoints > playerPoints) {
            console.log("Computer wins the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer");
          }
        }
      });
}

// for (let i = 0; i < 50; i++) {
//     let playerSelection = '';
//     let computerSelection = getComputerChoice();
//     console.log("You chose: " + playerSelection);
//     console.log("Computer chose: " + computerSelection);
//     let roundVictory = roundOne(playerSelection, computerSelection);
//     if (roundVictory === true) {
//         playerPoints++
//     } else if (roundVictory === false) {
//         computerPoints++
//     }
//     console.log("Player: " + playerPoints)
//     console.log("Computer: " + computerPoints)
//     if (playerPoints >= 3 || computerPoints >= 3) {
//         break
//     }
// }

// if (playerPoints > computerPoints) {
//     console.log("You win the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer")
// } else if (computerPoints > playerPoints) {
//     console.log("Computer wins the game! Final score: Player " + playerPoints + " - " + computerPoints + " Computer")
// }