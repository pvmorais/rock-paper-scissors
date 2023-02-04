//Function that can make a computer do a random selection
function getComputerChoice () {
    let weapons = ["paper", "rock", "scissors"]
    let useWeapon = weapons [Math.floor(Math.random() * weapons.length)]
    return useWeapon
}

// Function that can compare player selection and computer selection
function roundOne(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        return ('You win! ' + playerSelection + ' beats ' + computerSelection)
    } else {
        return ('Computer win! ' + computerSelection + ' beats ' + playerSelection)
    }
}

//Calling both Functions and printing on console
let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase()
let computerSelection = getComputerChoice ()
console.log("You choosed:" + playerSelection)
console.log("Computer choosed:" + computerSelection)
console.log(roundOne(playerSelection, computerSelection))

let playerPoints = 0
let computerPoints = 0

function gameScore () {
    let roundVictory = roundOne()
    if (roundVictory === "'You win! ' + playerSelection + ' beats ' + computerSelection"){
        playerPoints++
    } else if (roundVictory === "'Computer win! ' + computerSelection + ' beats ' + playerSelection"){
        computerPoints++
    }
}

gameScore()
console.log("Player:" + playerPoints)
console.log("Computer:" + computerPoints)