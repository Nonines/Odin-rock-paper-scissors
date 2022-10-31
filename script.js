const choices = ["rock", "paper", "scissors"];

const selectionButtons = document.querySelectorAll("button.selection-btn");

for (let button of selectionButtons) {
    button.addEventListener("click", () => playRound(button.id));
}

function getComputerChoice() {
    const randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

function playRound(playerSelection) {
    comChoice = getComputerChoice();

    console.log(`Your choice: ${playerSelection},` + ` COM's choice: ${comChoice}`);
    let winner;

    if (playerSelection === comChoice) {
        console.log("This round ended in a draw.");
        winner = "draw";

    } else if (playerSelection === "rock" && comChoice === "scissors") {
        console.log("You win this round.");
        winner = "player";

    } else if (playerSelection === "paper" && comChoice === "rock") {
        console.log("You win this round.");
        winner = "player";

    } else if (playerSelection === "scissors" && comChoice === "paper") {
        console.log("You win this round.");
        winner = "player";

    } else {
        console.log("COM wins this round.")
        winner = "com";
    }

    return winner;
}

// function getRoundsCount() {
//     while (true) {
//         const totalRounds = parseInt(prompt("How many rounds do you want to play?", "5"));
//         if (isNaN(totalRounds) || totalRounds <= 0) {
//             alert("Input integers greater than 1 only!");
//         } else {
//             return totalRounds;
//         }
//     }
// }

// function game(rounds) {
//     let playerScore = 0,
//         comScore = 0,
//         draws = 0;

//     for (let i = 0; i < rounds; i++) {
//         const roundWinner = playRound(getplayerSelection(), getComputerChoice());

//         switch(roundWinner) {
//             case "player":
//                 playerScore++;
//                 break;
//             case "com":
//                 comScore++;
//                 break;
//             default:
//                 draws++;
//         }
//     }

//     console.log("Game has ended!");
//     console.log(`Player: ${playerScore} win(s)`);
//     console.log(`COM: ${comScore} win(s)`);
//     console.log(`Draw(s): ${draws}`);

//     if (playerScore > comScore) {
//         console.log("You won the game!!!");
//     } else if (playerScore < comScore) {
//         console.log("You lost! COM wins the game!!!");
//     } else {
//         console.log("Good game! It was a tie!!!");
//     }
// }

// game(getRoundsCount());
