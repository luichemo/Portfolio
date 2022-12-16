const computerChoiceDissplay = document.getElementById('Computer-choice')
const UserChoiceDisplay = document.getElementById('User-choice')
const resultDisplay = document.getElementById('Result')
const possibleChoices = document.querySelectorAll('button')
let UserChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    UserChoice = e.target.id
    UserChoiceDisplay.innerHTML = UserChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber =Math.floor(Math.random() * 3)+1
    if (randomNumber === 1){
        computerChoice = 'Rock'
    }
    if (randomNumber === 2){
        computerChoice = 'Scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'Paper'
    }

    computerChoiceDissplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === UserChoice){
        result = 'it is a draw '
    }
    if (computerChoice ==='Rock' && UserChoice === 'Paper'){
        result = 'you win '
    }
    if (computerChoice ==='Rock' && UserChoice === 'Scissors'){
        result = 'you lose '
    }
    if (computerChoice ==='Paper' && UserChoice === 'Scissors'){
        result = 'you win '
    }
    if (computerChoice ==='Paper' && UserChoice === 'Rock'){
        result = 'you lose '
    }
    if (computerChoice ==='Siccors' && UserChoice === 'Paper'){
        result = 'you lose '
    }
    if (computerChoice ==='Siccors' && UserChoice === 'Rock'){
        result = 'you win '
    }

    resultDisplay.innerHTML = result
}