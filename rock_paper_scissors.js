let computerScore = 0;
let playerScore = 0; 
let round = 0;

while (round < 5) { function computerChoice () {
let myArray = ["rock", "paper", "scissor"];
let computerPlay = myArray[Math.floor(Math.random()*myArray.length)];
return computerPlay;
}

let computerSelection = computerChoice();

playerPlay = () => {
 let playerChoice = window.prompt(`Which do you choose: rock, paper, or scissor?`);
 return playerChoice;
}

let playerSelection = playerPlay();

console.log(playerSelection);

function playGame(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor") {
    playerScore++;
    round++;    
    console.log("You win! Rock beats scissor."); 
}
    else if (playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock") {
        computerScore++;
        round++;  
        console.log("You lose! rock beats scissor.");
}
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissor") {
        computerScore++;
        round++;  
        console.log("You lose! Scissor beats paper.");
}
    else if (playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper") {
        playerScore++; 
        round++;  
        console.log("You win! Scissor beats paper.");
}
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        computerScore++;
        round++;  
        console.log("You lose! Paper beats rock.");
}
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        playerScore++; 
        round++;  
        console.log("You win! Paper beats rock.");
}
    else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        round++;
        console.log("It's a tie. Go again.");
}
    else {
        round++;
        console.log("Try again. Be sure to type rock, paper or scissor.");
    }
}

playGame(playerSelection, computerSelection);
console.log(`Computer Score: ${computerScore}, Your Score: ${playerScore}. Round ${round} over.`)
}

if (computerScore > playerScore) {
    console.log(`Computer wins!`)
} else if (computerScore < playerScore) {
    console.log(`You win!`)
} else if (computerScore == playerScore) {
    console.log(`It's a tie.`)
} else {
    console.log(`You should try another round.`)
}

