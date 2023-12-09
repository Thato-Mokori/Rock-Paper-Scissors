let userScore = 0;
let computerScore = 0;
let tieScore = 0;
const userScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const tieScore_span = document.getElementById("tie-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function theComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

theComputerChoice();

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${userChoice} beats ${computerChoice}. You Win.`
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${userChoice} loses to ${computerChoice}. You lost.`
}

function draw(userChoice, computerChoice) {
  tieScore++;
  tieScore_span.innerHTML = tieScore;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${userChoice} is equal to ${computerChoice}. It's a tie.`
}

function game(userChoice) {
  const computerChoice = theComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, computerChoice);
      break;
  }

}



function main() {
  rock_div.addEventListener('click', function() {
    game("rock");
  })
  paper_div.addEventListener('click', function() {
    game("paper");
  })
  scissors_div.addEventListener('click', function() {
    game("scissors");
  })
}

main();
