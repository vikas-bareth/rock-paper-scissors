const choices = ['Rock','Paper','Scissors'];

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    return computerChoice;
}
