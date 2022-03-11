
function userPlay () {
  const btns = document.querySelectorAll("#rpsBtn");
  btns.forEach(btns =>{
    btns.addEventListener("click", function(){
      const userInput = btns.value;
      return userInput;
    })
  })
}


let computerPlay = () => {
  let Selection = ["rock", "paper", "scissors"];
  let computerInput = Selection[Math.floor(Math.random()*Selection.length)];
  console.log("computer input:  " + computerInput);
  return computerInput;
}                             


const userSelection = userPlay();
const computerSelection = computerPlay();



// Need to add DOM to this func so that it outputs in the UI rather than in the terminal - 
//not sure how this is going to turn out - 
//might add another function to incoroporate DOM with the if & else if statements below:
function playRound(userSelection, computerSelection) {
  if(userSelection === computerSelection){
      return "It's a draw";
  }
  else if(userSelection==="rock"){
      if(computerSelection==="scissors"){
          const output = output.getElemetById('game-out'){
            output.innerHTML = "rock beats scissors, you win!";
          } //this may not work as I can't test this in school - it looks like it should tho...
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
