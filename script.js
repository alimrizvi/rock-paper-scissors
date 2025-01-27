function getComputerChoice() {
    let randomPick = Math.random() * 3;
    if (randomPick <= 1) {return "rock"}
    else if (randomPick > 1 && randomPick <= 2) {return "paper"}
    else {return "scissor"};
}

function getHumanChoice() {
    let choice = prompt("Enter you choice between a Rock, Paper or Scissor!");
    return choice.toLowerCase();
}

function playRound() {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    if (humanChoice == computerChoice) {
        console.log('Draw! You both picked ' + humanChoice)
    }
    else if ((humanChoice=='rock' && computerChoice=='paper')||(humanChoice=='paper' && computerChoice=='scissor')||(humanChoice=='scissor' && computerChoice=='rock')) {
        console.log('You Lost! '+ computerChoice + ' beats '  + humanChoice)
        computerScore+=1
    }
    else if ((humanChoice=='rock' && computerChoice=='scissor')||(humanChoice=='paper' && computerChoice=='rock')||(humanChoice=='scissor' && computerChoice=='paper')) {
        console.log('You Win! '+ humanChoice + ' beats '  + computerChoice)
        humanScore+=1
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    if (humanScore>computerScore) {console.log('Human Wins '+ humanScore + ':'+computerScore)}
    else if (humanScore==computerScore) {console.log('Both Draw '+ humanScore + ':'+computerScore)}
    else if (humanScore<computerScore) {console.log('Computer Wins '+ computerScore + ':'+humanScore)}
}

playGame()

