function getComputerChoice() {
    let randomPick = Math.random() * 3;
    if (randomPick <= 1) {return "Rock"}
    else if (randomPick > 1 && randomPick <= 2) {return "Paper"}
    else {return "Scissor"};
}

function playRound(e) {
    if (completed==1) {
        matchWin.remove()
        completed=0
        humanScore=0
        computerScore=0
    }
    const humanChoice = e.target.textContent
    const computerChoice = getComputerChoice()
    if (humanChoice == computerChoice) {
        result = 'Draw! You both picked ' + humanChoice
    }
    else if ((humanChoice=='Rock' && computerChoice=='Paper')||(humanChoice=='Paper' && computerChoice=='Scissor')||(humanChoice=='Scissor' && computerChoice=='Rock')) {
        result = 'You Lost! '+ computerChoice + ' beats '  + humanChoice
        console.log(result)
    }
    else if ((humanChoice=='Rock' && computerChoice=='Paper')||(humanChoice=='Paper' && computerChoice=='Rock')||(humanChoice=='Scissor' && computerChoice=='Paper')) {
        result = ('You Won! '+ humanChoice + ' beats '  + computerChoice)
        console.log(result)
    }
    updateScore(result)
}

const options = ['Rock','Paper','Scissor']
const buttons = []
const buttonContainer = document.querySelector('#button-container')
const scoreContainer = document.querySelector('#score-container')

selectButtonText = document.createTextNode("Click on your Pick -> ") 
buttonContainer.appendChild(selectButtonText)

for (i=0;i<options.length;i++) {
    buttons[i] = document.createElement('button')
    buttons[i].textContent = options[i]
    buttons[i].addEventListener("click",playRound)
    buttonContainer.appendChild(buttons[i])
}

let humanScore = 0;
let computerScore = 0;
let completed = 0;
roundResult = document.createElement('p')
scoreContainer.appendChild(roundResult)
gameScore = document.createElement('p')
scoreContainer.appendChild(gameScore)
matchWin = document.createElement('p')
reMatchMessage = document.createTextNode('') 
matchWin.appendChild(reMatchMessage)
scoreContainer.appendChild(matchWin)


function updateScore(result) {
    roundResult.textContent = result
    gameScore.textContent = 'Human | ' + humanScore + ' - ' + computerScore + ' | Computer'
    if (humanScore==5|computerScore==5) {
        if (humanScore>computerScore) {matchResult = 'Human Wins '+ humanScore + ' - '+computerScore}
        else if (humanScore<computerScore) {matchResult ='Computer Wins '+ computerScore + ' - '+humanScore};
        completed = 1
        matchWin = document.createElement('p')
        reMatchMessage = document.createTextNode(' -- Pick again to rematch!')
        matchWin.textContent = matchResult 
        matchWin.appendChild(reMatchMessage)
        scoreContainer.appendChild(matchWin)
    }
}


