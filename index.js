document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons-container button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const userChoice = e.target.textContent.toLowerCase();
        });
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   function getComputerChoice() {
//     switch (getRandomInt(1, 3)) {
//       case 1:
//         return "Rock";
//       case 2:
//         return "Paper";
//       case 3:
//         return "Scissors";
//     }
//   }

//   function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   function getUserChoice() {
//     let userChoice;
//     let validInput = false;
//     while (!validInput) {
//       userChoice = capitalizeFirstLetter(
//         prompt("Rock, Paper, or Scissors?")
//       );
//       if (
//         userChoice === "Rock" ||
//         userChoice === "Paper" ||
//         userChoice === "Scissors"
//       ) {
//         validInput = true;
//       } else {
//         alert("Invalid Response. Please enter Rock, Paper, or Scissors!");
//       }
//     }
//     return userChoice;
//   }

//   function playGame() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let rounds = 5;

//     function playRound() {
//       const humanChoice = getUserChoice();
//       const computerChoice = getComputerChoice();
//       if (humanChoice === computerChoice) {
//         alert("It's a tie! We both picked " + humanChoice);
//       } else {
//         switch (humanChoice) {
//           case "Rock":
//             if (computerChoice == "Paper") {
//               alert("I win! Paper beats Rock!");
//               computerScore++;
//             } else {
//               alert("You win! Rock beats Scissors!");
//               playerScore++;
//             }
//             break;

//           case "Paper":
//             if (computerChoice == "Scissors") {
//               alert("I win! Scissors beats Paper!");
//               computerScore++;
//             } else {
//               alert("You win! Paper beats Rock!");
//               playerScore++;
//             }
//             break;

//           case "Scissors":
//             if (computerChoice == "Rock") {
//               alert("I win! Rock beats Scissors!");
//               computerScore++;
//             } else {
//               alert("You win! Scissors beats Paper!");
//               playerScore++;
//             }
//             break;
//         }
//       }
//     }

//     for (let i = 0; i < rounds; i++) {
//       playRound();
//     }

//     if (playerScore > computerScore) {
//       alert("Congratulations, you won the game! Score: " + playerScore + "-" + computerScore);
//     } else if (computerScore > playerScore) {
//       alert("Haha, I won the game! Score: " + computerScore + "-" + playerScore);
//     } else {
//       alert("It's a draw! Score: " + playerScore + "-" + computerScore);
//     }
//   }