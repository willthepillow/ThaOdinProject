//this branch is for js - just a test
function computerPlay(randomRPS) {
    console.log("bruh moment");
    const rockPaperScissors = ["Rock", "Paper", "Scissors"]
    let randomRPS = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)] // this line chooses between "rock", "paper" or "scissors" at random
    console.log(randomRPS)
}

function userPlay() {
    let userInput = window.prompt("Please input Either rock, paper or scissors.")
    let userInputLowerCase = userInput.toLowerCase()
    console.log(userInputLowerCase)
}

function game() {
    console.log("This is on the JavaScript branch now")
}