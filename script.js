const selectionButtons = document.querySelectorAll("button.selection-btn");

for (let button of selectionButtons) {
    button.addEventListener("click", () => playRound(button.id));
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

function playRound(playerSelection) {
    comSelection = getComputerChoice();

    console.log(`Your choice: ${playerSelection},` + ` COM's choice: ${comSelection}`);
    let winner;

    if (playerSelection === comSelection) {
        console.log("This round ended in a draw.");
        winner = "draw";

    } else if (playerSelection === "rock" && comSelection === "scissors") {
        console.log("You win this round.");
        winner = "player";

    } else if (playerSelection === "paper" && comSelection === "rock") {
        console.log("You win this round.");
        winner = "player";

    } else if (playerSelection === "scissors" && comSelection === "paper") {
        console.log("You win this round.");
        winner = "player";

    } else {
        console.log("COM wins this round.")
        winner = "com";
    }

    showResults(playerSelection, comSelection, winner);
    getScore(winner);
}

const resultsDiv = document.querySelector("#results-container");
const playerChoicePara = document.createElement("p");
const comChoicePara = document.createElement("p");
const roundWinnerPara = document.createElement("p");

function showResults(playerChoice, comChoice, winner) {
    playerChoicePara.textContent = `Your choice: ${playerChoice}`;
    comChoicePara.textContent = `COM's choice: ${comChoice}`;
    if (winner === "draw") {
        roundWinnerPara.textContent = "It's a tie!"
    } else {
        roundWinnerPara.textContent = `${winner} wins this round!`;
    }

    resultsDiv.appendChild(playerChoicePara);
    resultsDiv.appendChild(comChoicePara);
    resultsDiv.appendChild(roundWinnerPara);
}

function getScore() {
    // code
}
