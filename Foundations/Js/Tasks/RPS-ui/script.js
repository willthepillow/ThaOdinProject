
let computerPlay = () => {
    let Selection = ["rock", "paper", "scissors"]
    let computerInput = Selection[Math.floor(Math.random()*Selection.length)]
    console.log(computerInput)
    return computerInput;
}                           //The function above selects a random string from the array(rock, paper, scissors) and then returns it as 'computerInput'

let userPlay = () => {
    let userInput = window.prompt("rock, paper or scissors?");
    userInput.toLowerCase()
    console.log(userInput)
    return userInput;
}                         /* The funtion above asks the user to input what they want to type from rock, paper, scissors - if they capitalise anything or do not input the exact 
string then the rest of the script will not work*/

const userSelection = userPlay();
const computerSelection = computerPlay(); //This just transfers the variables used into different names so its easyer to type

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
            return "You lost, scissors beats paper - unlucky!!";          /*The function to the left just runs throught if / else if statements to play rock, paper, scissors */
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
