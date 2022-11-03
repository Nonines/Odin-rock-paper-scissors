let playerScore = 0, comScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", selectRock);
paperButton.addEventListener("click", selectPaper);
scissorsButton.addEventListener("click", selectScissors);

function selectRock() {
    playRound("rock");
}

function selectPaper() {
    playRound("paper");
}

function selectScissors() {
    playRound("scissors")
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

const roundInfo = document.createElement("p");
const roundWinInfo = document.createElement("p");
roundContainer.appendChild(roundInfo);
roundContainer.appendChild(roundWinInfo);

function showResults(playerSelection, comSelection, winner) {
    roundInfo.textContent = `You chose ${playerSelection.toUpperCase()}. COM chose ${comSelection.toUpperCase()}.`;

    let winningChoice, losingChoice;

    switch(winner) {
        case "player":
            roundWinInfo.textContent = "You win!";
            winningChoice = playerSelection;
            losingChoice = comSelection;
            break;

        case "com":
            roundWinInfo.textContent = "COM wins!";
            winningChoice = comSelection;
            losingChoice = playerSelection;
            break;

        case "draw":
            roundWinInfo.textContent = "It's a tie. Try again!";
            return;
    }

    roundWinInfo.textContent += ` ${winningChoice.toUpperCase()} beats ${losingChoice}.`;
}

const scoreContainer = document.querySelector("#score-container");
const playerScoreSpan = document.querySelector("#player-score");
const comScoreSpan = document.querySelector("#com-score");

function displayScore(winner){
    switch(winner) {
        case "player":
            playerScore++;
            console.log(playerScore);
            break;

        case "com":
            comScore++;
            console.log(comScore);
            break;
    }

    playerScoreSpan.textContent = playerScore;
    comScoreSpan.textContent = comScore;
    checkScore(winner);
}

function checkScore(winner) {
    const winMessage = document.createElement("p");
    winMessage.id = "win-message";

    if (playerScore == 5 || comScore == 5) {
        rockButton.removeEventListener("click", selectRock);
        paperButton.removeEventListener("click", selectPaper);
        scissorsButton.removeEventListener("click", selectScissors);

        if (winner === "COM") {
            winMessage.textContent = "COM wins the game! Better luck next time!";
        } else {
            winMessage.textContent = "You won the game! Good going!";
        }
        scoreContainer.appendChild(winMessage);
    }
}
