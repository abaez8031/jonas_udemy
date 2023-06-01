'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const checkGuessBtn = document.querySelector('.check');
const resetBtn = document.querySelector(".again");

checkGuessBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No Number!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost the game!');
    }
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#60b347"
    document.querySelector('.number').style.width = "30rem"
    document.querySelector('.number').textContent = secretNumber;
    if(score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore
    }
  }
});

resetBtn.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
})