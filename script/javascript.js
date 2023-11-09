console.log("Hello World")
const button = document.querySelector("button");
function playRound(playerSelection, computerSelection) {
  


    if (playerSelection === computerSelection) {

        return (`A Tie! ${playerSelection} and ${computerSelection}`); 

    } else if (playerSelection === "scissors" && computerSelection === "paper"  || 
              playerSelection === "paper" && computerSelection === "rock"  || 
              playerSelection === "rock" && computerSelection === "scissors") {

        return (`You win! ${playerSelection} beats ${computerSelection}`); 

    } else  {

        return (`You lose! ${computerSelection} beats ${playerSelection}`); 

        }
    
  }
 
  function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    console.log("rn>" + randomNumber);
    let computerChoice = "";


    switch (randomNumber) {
    case 0:
        computerChoice ='rock';
        break;
    case 1:
        computerChoice= 'paper';
        break;
    case 2:
        computerChoice=  'scissors';
        break;
    }

    return computerChoice;

    }

    function game(playerSelect){

        let playerSelection = prompt("Write rock, scissors or paper");
        playerSelect = playerSelection;     
        let computerChoice = getComputerChoice();   
        console.log("cc>" +  computerChoice);
        let result = playRound(playerSelect,computerChoice); 
        console.log("result>" +  result);
        const game = document.querySelector("#game");
      
        game.textContent = `Your choice was  ${playerSelection} and 
        computer choices ${computerChoice} so ${result} `;
        
        

    }
    button.addEventListener("click", game);

