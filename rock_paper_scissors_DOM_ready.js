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
        myTimeout()


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

function myTimeout () {
        if(round >= 3) {setTimeout(newGame, 1000);}
}

function newGame() {
        if(round >= 3) {
                if (computerScore > playerScore) {
                        alert(`You lost. Try again and maybe you'll get lucky.`)
                } else if (computerScore < playerScore) {
                        alert(`You won. Wanna play another round?`)
                } else if (computerScore === playerScore) {
                        alert(`It's a tie. Shucks.`)
                };
        document.getElementById('computer-choice').style.display = "none"
        document.getElementById('your-choice').style.display = "none"
        playerScore = 1
        playerScoreDisplay = 0
        computerScore = 1 
        computerScoreDisplay = 0 
        round = 0 
        result = 'NEW GAME'
}
        computerScoreCount.innerHTML = computerScoreDisplay
        playerScoreCount.innerHTML = playerScoreDisplay
        roundCount.innerHTML = round
        resultDisplay.innerHTML = result
}

