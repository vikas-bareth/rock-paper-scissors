const choices = ['rock','paper','scissors'];

function getPlayerChoice(){
    const choice = prompt('enter your choice rock, paper or scissors').toLowerCase();
    return choice;
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    return computerChoice;
}

function playRound(playerSelection,computerSelection){
    //check for a tie
    if(playerSelection === computerSelection){
        return 'tie';
    }
    //check for playerWin condition
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        return 'win';
    }
    //check for computer win
    else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        return 'lose';
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection,computerSelection);
    if(result === 'win'){
            playerScore++;
            console.log(`You win ${playerSelection} beats ${computerSelection}`)
            console.log(`Your-Score:${playerScore} Computer-Score:${computerScore}`)
        } else if (result === 'lose'){
            computerScore++
            console.log(`You lose ${computerSelection} beats ${playerSelection}`);
            console.log(`Your-Score:${playerScore} Computer-Score:${computerScore}`)
            ;
        } else {
            console.log(`It's a tie you both choose ${playerSelection}`)
            console.log(`Your-Score:${playerScore} Computer-Score:${computerScore}`)
        }
    console.log("*****************************")
    if(playerScore > computerScore){
        console.log("Congratulation you won with a total Score of:")
        console.log(`Your-final-Score:${playerScore},Computer-final-Score:${computerScore}`)
    } else {
        console.log("Oops! Better luck next time")
        console.log(`Your-final-Score:${playerScore},Computer-final-Score:${computerScore}`)
    }
}
game();