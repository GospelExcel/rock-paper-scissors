document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons-container button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const userChoice = e.target.textContent.toLowerCase();
            playRound(userChoice);
        });
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();

    // Update UI to show choices
    document.querySelector('p:nth-child(1)').textContent = `You Picked: ${userChoice}`;
    document.querySelector('p:nth-child(2)').textContent = `Computer Picked: ${computerChoice}`;
  
    // Determine winner
    let result = '';
    if (computerChoice === userChoice) {
        result = 'It\'s a tie!'
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        updateScore('user');
    } else {
        result = 'Computer wins!';
        updateScore('computer');
    }

    // Display winner
    document.querySelector('.result').textContent = result;
}

function updateScore(winner) {
    const scoreElement = document.getElementById(`${winner}-score`);
    scoreElement.textContent = parseInt(scoreElement.textContent) +1;

    checkGameOver();
}

function checkGameOver() {
    const userScore = parseInt(document.getElementById('user-score').textContent);
    const computerScore = parseInt(document.getElementById('computer-score').textContent);

    if (userScore === 5 || computerScore === 5) {
        document.querySelectorAll('.buttons-container button').forEach(button => {
            button.disabled = true;
        });

        document.querySelector('.result').textContent = userScore === 5 ? 'You won the game!' : 'Computer won the game!';
    }
}