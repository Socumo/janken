console.log("Hello World")
const button = document.querySelector("button");
function playRound(playerSelection, computerSelection) {
  


    if (playerSelection === computerSelection) {

        return (`A Tie! ${playerSelection} and ${computerSelection}`); 

    }else if (playerSelection === "scissors" && computerSelection === "rock"  || 
              playerSelection === "rock" && computerSelection === "paper"  || 
              playerSelection === "paper" && computerSelection === "scissors") {

        return (`You lose! ${playerSelection} beats ${computerSelection}`); 

    }else if (playerSelection === "scissors" && computerSelection === "paper"  || 
              playerSelection === "rock" && computerSelection === "scissors"  || 
              playerSelection === "paper" && computerSelection === "rock") {

        return (`You win! ${playerSelection} beats ${computerSelection}`); 

        }
    
  }
  playRound();
 
  function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = "";

    switch (randomNumber) {
    case 1:
        computerChoice ='rock';
    case 2:
        computerChoice= 'paper';
    case 3:
        computerChoice=  'scissors';
    }

    return computerChoice;

    }
    getComputerChoice();

    function game(playerSelect){

        let playerSelection = prompt("Write rock, scissors or paper");
        playerSelect = playerSelection;     
        let computerChoice = getComputerChoice();   
        let result = playRound(playerSelect,computerChoice); 
        const game = document.querySelector("#game");
      
        game.textContent = `Your choice was  ${playerSelection} and 
        computer choices ${computerChoice} so ${result} `;
        
        console.log(result); 


    }
    button.addEventListener("click", game);

