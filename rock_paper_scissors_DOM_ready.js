let computerChoiceDisplay = document.getElementById('computer-choice')
let userChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const newGames = document.querySelector('newGame')
let roundCount = document.getElementById('roundCount')
let playerScoreCount = document.getElementById('playerScoreCount')
let computerScoreCount = document.getElementById('computerScoreCount')
let instructionsDisplay = document.getElementById('instructions')
let computerScore = 1
let playerScore = 1
let round = 0
let userChoice 
let computerChoice 
let result 
let computerScoreDisplay = 0 
let playerScoreDisplay = 0


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (evt) => { 
        document.getElementById('computer-choice').style.display = "block"
        document.getElementById('your-choice').style.display = "block"
        userChoice = evt.target.id 
        userChoiceDisplay.innerHTML = userChoice 
        round++
        roundCount.innerHTML = round
        generateComputerChoice()
        getResult()
        newGame()

}))

function generateComputerChoice() {
const randomNum = Math.floor(Math.random() * 3+1);

if (randomNum === 1) {
computerChoice = '🪨'
}else if (randomNum === 2) {
computerChoice = '✂️'
}else if (randomNum === 3) {
computerChoice = '📃'
}
computerChoiceDisplay.innerHTML = computerChoice
}


function getResult() {
       if (computerChoice === '🪨' && userChoice === "✂️") {
                result = 'you lose'
                computerScoreDisplay = computerScore++;
        } else if (computerChoice === '🪨' && userChoice === '📃') {
                result = 'you win'
                playerScoreDisplay = playerScore++;
        } else if (computerChoice === '✂️' && userChoice === '📃') {
                result = 'you lose'
                computerScoreDisplay = computerScore++;
        } else if (computerChoice === '✂️' && userChoice === '🪨') {
                result = 'you win'
                playerScoreDisplay = playerScore++;
        } else if (computerChoice === '📃' && userChoice === '🪨') {
                result = 'you lose'
                computerScoreDisplay = computerScore++;
        } else if (computerChoice === '📃' && userChoice === '✂️') {
                result = 'you win'
                playerScoreDisplay = playerScore++;
        } else if (computerChoice === userChoice) {
                result = 'its a tie'
        }

resultDisplay.innerHTML = result
computerScoreCount.innerHTML = computerScoreDisplay
playerScoreCount.innerHTML = playerScoreDisplay
}



function newGame () {
        if (round >= 3) {
                if (computerScore > playerScore) {
                        alert(`You lost. Try again and maybe you'll get lucky.`)
                } else if (computerScore < playerScore) {
                        alert(`You won. Wanna play another round?`)
                } else if (computerScore === playerScore) {
                        alert(`It's a tie. Shucks.`)
                }
        document.getElementById('computer-choice').style.display = "none"
        document.getElementById('your-choice').style.display = "none"
        playerScore = 1
        playerScoreDisplay = 0
        computerScore = 1 
        computerScoreDisplay = 0 
        round = 0 
        result = 'NEW GAME'
        computerScoreCount.innerHTML = computerScoreDisplay
        playerScoreCount.innerHTML = playerScoreDisplay
        roundCount.innerHTML = round
        resultDisplay.innerHTML = result
        }
}






/*if (round === 0) {
        instructions = 'You're going down... '
} else if (round === 1) {
        instructions = '2 more chances to beat me...'
} else if (round === 2) {
        instructions = '1 more chance to beat me...'
} else if (round >= 3 && computerScore > playerScore) {
        instructions = 'GAME OVER: you lost the game'
        round = -1
} else if (round >= 3 && computerScore < playerScore) {
        instructions = 'GAME OVER: you won the game'
        round = -1
} else if (round >= 3 && computerScore === playerScore) {
        instructions = 'GAME OVER: its a tie'
        round = -1
}












/*



let computerScore = 0;
let playerScore = 0; 
let round = 0;
let buttons = document.querySelectorAll('#button');




playerChoice
   
let playerSelection = playerPlay();
function computerChoice () {
let myArray = ["rock", "paper", "scissor"];
let computerPlay = myArray[Math.floor(Math.random()*myArray.length)];
return computerPlay;
}

let computerSelection = computerChoice();

document.getElementById('choiceSubmit').onclick = function playGame(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor") {
    playerScore++;
    round++;    
    console.log("You win! Rock beats scissor."); 
} else if (playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock") {
        computerScore++;
        round++;  
        console.log("You lose! rock beats scissor.");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissor") {
        computerScore++;
        round++;  
        console.log("You lose! Scissor beats paper.");
} else if (playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper") {
        playerScore++; 
        round++;  
        console.log("You win! Scissor beats paper.");
} else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        computerScore++;
        round++;  
        console.log("You lose! Paper beats rock.");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        playerScore++; 
        round++;  
        console.log("You win! Paper beats rock.");
} else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        round++;
        console.log("It's a tie. Go again.");
} else {
        round++;
        console.log("Try again. Be sure to type rock, paper or scissor.");
    }
};

playGame(playerSelection, computerSelection);
console.log(`Computer Score: ${computerScore}, Your Score: ${playerScore}. Round ${round} over.`);

if (computerScore > playerScore) {
    console.log(`Computer wins!`);
} else if (computerScore < playerScore) {
    console.log(`You win!`);
} else if (computerScore == playerScore) {
    console.log(`It's a tie.`);
} else {
    console.log(`You should try another round.`);
        }
};
*/ 
