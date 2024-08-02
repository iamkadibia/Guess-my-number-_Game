"use strict";

// Selecting Elements
const btnAgain = document.getElementById("btn-again");
const btnCheck = document.getElementById("btn-check");
let secreatNoDisplay = document.getElementById("secreat-no");
const guessInput = document.getElementById("number");
const message = document.getElementById("message");
const scoreValue = document.getElementById("score-value");
const highscoreValue = document.getElementById("highscore-value");
const container = document.getElementById("container");

let score = 20;
let highscore = 0;
let secreatNumber;

// Generating Random Number
function generateSecreatNumber() {
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
}

// Implementing Game Logic
btnCheck.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  //   When there is no guess
  if (!guess) {
    if (score > 1) {
      message.textContent = "Input a number!";
      score--;
      scoreValue.textContent = score;
    } else {
      message.textContent = "Game Over!";
      container.style.backgroundColor = "#8b0000";
      message.style.fontSize = "14px";
      scoreValue.textContent = "0";
    }

    // When guess is corect
  } else if (guess == secreatNumber) {
    secreatNoDisplay.textContent = secreatNumber;
    secreatNoDisplay.style.width = "200px";
    score++;
    scoreValue.textContent = score;
    message.textContent = "Correct Number!";
    message.style.fontSize = "12px";
    container.style.backgroundColor = "#006400";
    guessInput.value = "";
    if (highscore < score) {
      highscore = score;
    }
    highscoreValue.textContent = highscore;

    // When guess is wrong
  } else if (guess !== secreatNumber) {
    if (score > 1) {
      message.textContent = guess >= secreatNumber ? "Too High!" : "Too Low!";
      score--;
      scoreValue.textContent = score;
    } else {
      message.textContent = "Game Over!";
      container.style.backgroundColor = "#8b0000";
      message.style.fontSize = "14px";
      scoreValue.textContent = "0";
    }
  }
});

// Alternative click "Enter Key"
guessInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    btnCheck.click();
  }
});

btnAgain.addEventListener("click", function () {
  score = 20;
  generateSecreatNumber();
  secreatNoDisplay.textContent = "?";
  secreatNoDisplay.style.width = "150px";
  message.textContent = "Start guessing...";
  scoreValue.textContent = "20";
  message.style.fontSize = "10px";
  container.style.backgroundColor = "#222";
});

generateSecreatNumber();
