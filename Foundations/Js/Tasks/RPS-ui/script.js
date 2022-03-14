    function computerPlay() {
      let Selection = ["rock", "paper", "scissors"];
      let computerInput = Selection[Math.floor(Math.random()*Selection.length)];
      console.log("computer input:  " + computerInput);
      return computerInput;
    }                             

    function userPlay() {
      const btns = document.querySelectorAll("#rpsBtn");
      btns.forEach(btns =>{
        btns.addEventListener("click", function(){
          const userInput = btns.value;
          console.log(userInput)
          return
        })
      })
    }

    function playRound(e) {
      playerSelection = e.srcElement.id;
      computerSelection = computerPlay();
      console.log(playerSelection + "user")
      console.log(computerSelection + "computer")
      if(userSelection === computerSelection){
          outPut = "It's a draw";
      }
      else if(userSelection==="rock"){
          if(computerSelection==="scissors"){
            playerScore++
            outPut("rock beats scissors bigga!!!!!!")
          }
          else if(computerSelection==="paper"){
              outPut = "paper beats rock - you loose";
          }
      }
      else if(userSelection==="paper"){
          if(computerSelection==="scissors"){
              outPut = "You lost, scissors beats paper - unlucky!!";
          }
          else if(computerSelection==="rock"){
              outPut = "You lost, rock beats paper - HAHAHA!!!";
          }
      }
      else if (userSelection==="scissors"){
          if(computerSelection==="paper"){  
              playerScore++
              outPut = "you lucky ..., scissors beats paper";
          }
          else if (computerSelection==="rock"){
              outPut = "rock beats scissors";
          }
      }
      console.log(outPut)
    }

    playRound();


//This is bullshit - I cannot work out how to get parts of the script to activate with the user input as it
//just runs through the script like a fucking speed cunt thing, and does not work - moving on 
//to the other part of the shitty foundations course - fuck you too, cunt.