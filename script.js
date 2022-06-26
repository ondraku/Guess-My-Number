'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess)

        if (!guess) {
            displayMessage('⛔️ No number!');
        } else if (guess === secretNumber) {
            displayMessage('🎉 Correct number!');

            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!'); 
                score--;
                displayScore(score);
            } else {
                displayMessage('💥 You lost the game!');
                displayScore(0);
            }
        } 
    });

    document.querySelector('.again').addEventListener('click', function() {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        displayMessage('Start guessing...');
        displayScore(score);
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });
    