let playerPoints = 0
let computerPoints = 0

// Function that can make a computer do a random selection
function getComputerChoice () {
    let weapons = ["paper", "rock", "scissors"]
    let useWeapon = weapons[Math.floor(Math.random() * weapons.length)]
    return useWeapon
}

// Function that can compare player selection and computer selection
function roundOne(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie!")
        return "tie"
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        console.log("You win! " + playerSelection + " beats " + computerSelection)
        return true
    } else {
        console.log("Computer win! " + computerSelection + " beats " + playerSelection)
        return false
    }
}

//Make the loop until someone get 3 points
while (playerPoints < 3 && computerPoints < 3) {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase()
    let computerSelection = getComputerChoice()
    console.log("You chose: " + playerSelection)
    console.log("Computer chose: " + computerSelection)
    let roundVictory = roundOne(playerSelection, computerSelection)

    if (roundVictory === true) {
        playerPoints++
    } else if (roundVictory === false) {
        computerPoints++
    }
    console.log("Round score:")
    console.log("Player: " + playerPoints)
    console.log("Computer: " + computerPoints)
}

//displaying on console
console.log("Final score:")
console.log("Player: " + playerPoints)
console.log("Computer: " + computerPoints)

//Final result
if (playerPoints === 3) {
    console.log("You win the game!")
} else {
    console.log("Computer wins the game.")
}