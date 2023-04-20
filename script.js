//grabbing buttons
const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')
//grabbing scores div
const playerSign = document.querySelector('#playerSign')
const computerSign = document.querySelector('#computerSign')
//grabbing scores paragraphs
const playerScorePara = document.querySelector('#playerScore')
const computerScorePara = document.querySelector('#computerScore')
const scoreInfo = document.querySelector('#scoreInfo')
const scoreMessage = document.querySelector('#scoreMessage')
//grabbing overlaymodal
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

const choices = ['rock','paper','scissors'];
let roundWinner = '';
let playerScore = 0;
let computerScore = 0;

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
    if(playerSelection === computerSelection){
        roundWinner = 'tie';
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        playerScore++;
        roundWinner = 'win';
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        computerScore++;
        roundWinner = 'lose';
    }

}


rockBtn.addEventListener('click',() => handleClick('rock'))
paperBtn.addEventListener('click',() => handleClick('paper'))
scissorsBtn.addEventListener('click',() => handleClick('scissors'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection){
    if(isGameOver()){
        openEndGameModal()
        return
    } 
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    updateChoices(playerSelection,computerSelection);
    updateScore();

    if(isGameOver()) {
        openEndGameModal()
        setFinalMessage()
      }
}

function updateScore(){
    if( roundWinner === 'tie'){
        scoreInfo.textContent = "It's a tie!"
    } else if( roundWinner === 'win'){
        scoreInfo.textContent = "You won!"
    } else if (roundWinner === 'lose') {
        scoreInfo.textContent = 'You lost!'
    }

    playerScorePara.textContent = `You : ${playerScore}`;
    computerScorePara.textContent = `Computer : ${computerScore}`;  
}

function updateChoices(playerSelection,computerSelection){
    if (playerSelection === 'rock'){
        playerSign.textContent = '✊';
    } else if (playerSelection === 'paper'){
        playerSign.textContent = '✋';
    } else if (playerSelection === 'scissors'){
        playerSign.textContent = '✌';
    }

    if (computerSelection === 'rock'){
        computerSign.textContent = '✊';
    } else if (computerSelection === 'paper'){
        computerSign.textContent = '✋';
    } else if (computerSelection === 'scissors'){
        computerSign.textContent = '✌';
    }
}

function isGameOver(){
    return playerScore === 5 || computerScore === 5
}

function openEndGameModal(){
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won...')
      : (endgameMsg.textContent = 'You lost...')
  }

  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }
  function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player : 0'
    computerScorePara.textContent = 'Computer : 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }
