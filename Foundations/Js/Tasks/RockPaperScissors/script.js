
let computerPlay = () => {
    let Selection = ["rock", "paper", "scissors"]
    let computerInput = Selection[Math.floor(Math.random()*Selection.length)]
    console.log(computerInput)
    return computerInput;
}

let userPlay = () => {
    let userInput = window.prompt("rock, paper or scissors?");
    userInput.toLowerCase()
    console.log(userInput)
    return userInput;
}

const userSelection = userPlay();
const computerSelection = computerPlay();

function playRound(userSelection, computerSelection) {
    if(userSelection === computerSelection){
        return "It's a draw";
    }
    else if(userSelection==="rock"){
        if(computerSelection==="scissors"){
            return "rock beats scissors, you win!";
        }
        else if(computerSelection==="paper"){
            return "paper beats ... idk - you loose";
        }
    }
    else if(userSelection==="paper"){
        if(computerSelection==="scissors"){
            return "You lost, scissors beats paper - unlucky!!";
        }
        else if(computerSelection==="rock"){
            return "You lost, rock beats paper - HAHAHA!!!";
        }
    }
    else if (userSelection==="scissors"){
        if(computerSelection==="paper"){  
            return "you lucky ..., scissors beats paper";
        }
        else if (computerSelection==="rock"){
            return "rock beats scissors";
        }
    }
}
console.log(playRound(userSelection, computerSelection));