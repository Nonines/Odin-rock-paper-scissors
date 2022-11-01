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
    displayScore(winner);
}

const roundContainer = document.querySelector("#round-container");

const playerChoicePara = document.createElement("p");
const comChoicePara = document.createElement("p");
const roundWinnerPara = document.createElement("p");

function showResults(playerChoice, comChoice, winner) {
    playerChoicePara.textContent = `Your choice: ${playerChoice}`;
    comChoicePara.textContent = `COM's choice: ${comChoice}`;

    if (winner === "draw") {
        roundWinnerPara.textContent = "It's a tie!";
    } else {
        roundWinnerPara.textContent = `${winner} wins this round!`;
    }

    roundContainer.appendChild(playerChoicePara);
    roundContainer.appendChild(comChoicePara);
    roundContainer.appendChild(roundWinnerPara);
}

let comScore = 0;
let playerScore = 0;
const scoreContainer = document.querySelector("#score-container");

const playerScorePara = document.createElement("p");
const comScorePara = document.createElement("p");

scoreContainer.appendChild(playerScorePara);
scoreContainer.appendChild(comScorePara);

function displayScore(winner) {

    switch(winner) {
        case "player":
            playerScore++;
            break;
        case "com":
            comScore++;
            break;
    }
    playerScorePara.textContent = `Your score - ${playerScore}`;
    comScorePara.textContent = `COM score - ${comScore}`;

    if (playerScore === 5 || comScore === 5) {
        playerScore = 0;
        comScore = 0;
    }
}
