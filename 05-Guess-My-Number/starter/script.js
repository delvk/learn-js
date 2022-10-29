'use strict';

const genNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = genNumber();

let score = 20;
let highScore = 0;
let msg;
let end = false;
const orgBackgroundColor = document.querySelector('body').style.backgroundColor;
const orgNumber = {
  value: document.querySelector('.number').textContent,
  color: document.querySelector('.number').style.color,
};
const orgMsg = document.querySelector('.message').textContent;

document.querySelector('.check').addEventListener('click', () => {
  // if equal secretNumber then return success
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) msg = 'Empty number';
  else if (end) return;
  else if (guessNumber === secretNumber) {
    msg = 'Correct';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.color = 'green';
    highScore = score > highScore ? score : highScore;
    end = true;
  } else if (guessNumber > secretNumber) {
    msg = 'Too high';
    document.querySelector('.score').textContent = --score;
  } else {
    msg = 'Too low';
    document.querySelector('.score').textContent = --score;
  }
  if (score === 0) {
    msg = 'You loose';
    end = true;
  }

  document.querySelector('.message').textContent = msg;
  document.querySelector('.highscore').textContent = highScore;
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = orgBackgroundColor;
  document.querySelector('.number').textContent = orgNumber.value;
  document.querySelector('.number').style.color = orgNumber.color;
  secretNumber = genNumber();
  msg = orgMsg;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = msg;
  end = false;
});
