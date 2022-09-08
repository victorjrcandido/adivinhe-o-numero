'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// play again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Começar a adivinhar...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('⚡ - guess', guess, typeof guess);

  // when no number is provided
  if (!guess) {
    displayMessage('🚫 Sem numero');
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Acertou');
    document.querySelector('.number').textContent = secretNumber;

    // turn green
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (
      document.querySelector('.score').textContent >=
      document.querySelector('.highscore').textContent
    ) {
      document.querySelector('.highscore').textContent = score;
    }

    // when guess is WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Muito alto' : '🔻 Muito baixo');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Voce perdeu');
      document.querySelector('.score').textContent = 0;
    }
  }
});
