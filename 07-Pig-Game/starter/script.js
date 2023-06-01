'use strict';

const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
const currentScore0El = document.getElementById("current--0")
const currentScore1El = document.getElementById("current--1")
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing
const init = function() {
  scores = [0,0]
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner")
  player1El.classList.remove("player--winner")
  player0El.classList.add("player--active")
  player1El.classList.remove("player--active")
};
init();

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active")
  player1El.classList.toggle("player--active")
}

const displayDiceImg = function(diceNumber) {
  diceEl.classList.remove("hidden")
  diceEl.src = `dice-${diceNumber}.png`
}

const rollDice = function() {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6 + 1)
    displayDiceImg(diceRoll)
    if(diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
      switchPlayer();
    }
  }
}

const holdScore = function() {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
      diceEl.classList.add("hidden")
    }
    else {
      switchPlayer();
    }
  }
}

btnRoll.addEventListener("click", rollDice)
btnHold.addEventListener("click", holdScore)
btnNew.addEventListener("click", init)