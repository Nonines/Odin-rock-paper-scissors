const selectionButtons = document.querySelectorAll(".selection-img");

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
    // displayScore(winner);
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
