'use strict';

const checkGuessBtn = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const message = document.querySelector('.message');
let score = 20;
const resetBtn = document.querySelector(".again");
let highScore = 0;


checkGuessBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔️ No Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      message.textContent = 'Too High! ...';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      message.textContent = 'You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      message.textContent = 'Too Low! ...';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      message.textContent = 'You lost the game!';
    }
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
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
  message.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
})