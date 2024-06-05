const choice = ['rock', 'paper', 'scissor']



const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');

rockButton.addEventListener('click', () => {
  playGame('rock');
});
paperButton.addEventListener('click', () => {
  playGame('paper');
});
scissorButton.addEventListener('click', () => {
  playGame('scissor');
});

function getComputerChoice(){
  const randomIndex = Math.floor(Math.random() * choice.length)
  return choice[randomIndex];
}











function updateScoreDisplay() {

}





let playerScore = 0;
let computerScore = 0;
