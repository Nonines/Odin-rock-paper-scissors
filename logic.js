const choices = ["rock", "paper", "scissors"];

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function getComputerChoice() {
    const randInt = getRandomNumber(choices.length);
    return choices[randInt];
}

function getPlayerSelection() {
    while (true) {
        const choice = prompt("Make a choice (Rock, Paper, Scissors)").toLowerCase();
        if (choices.includes(choice)) {
            return choice;
        } else {
            console.log("Invalid choice");
        }
    }
}

function playRound(playerChoice, comChoice) {
    console.log(`Your choice: ${playerChoice},` + ` COM's choice: ${comChoice}`);
    let winner;

    if (playerChoice === comChoice) {
        console.log("Draw");
        winner = "draw";

    } else if (playerChoice === "rock" && comChoice === "scissors") {
        console.log("You win");
        winner = "player";

    } else if (playerChoice === "paper" && comChoice === "rock") {
        console.log("you win");
        winner = "player";

    } else if (playerChoice === "scissors" && comChoice === "paper") {
        console.log("you win");
        winner = "player";

    } else {
        console.log("COM wins")
        winner = "com";
    }

    return winner;
}

playRound(getPlayerSelection(), getComputerChoice())
