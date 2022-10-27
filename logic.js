const choices = ["rock", "paper", "scissors"];

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function getComputerChoice() {
    const randInt = getRandomNumber(choices.length);
    return choices[randInt];
}

function getPlayerChoice() {
    while (true) {
        const choice = prompt("Make a choice (Rock, Paper, Scissors)").toLowerCase();
        if (choices.includes(choice)) {
            return choice;
        } else {
            alert("Invalid choice!");
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

function getRoundsCount() {
    while (true) {
        const totalRounds = parseInt(prompt("How many rounds do you want to play?", "5"));
        if (isNaN(totalRounds)) {
            alert("Input integers greater than 1 only!");
        } else {
            return totalRounds;
        }
    }
}

function game(rounds) {
    let playerScore = 0,
        comScore = 0;

    for (let i = 0; i < rounds; i++) {
        const roundWinner = playRound(getPlayerChoice(), getComputerChoice());

        switch(roundWinner) {
            case "player":
                playerScore++;
                break;
            case "com":
                comScore++;
                break;
            default:
                console.log("Round was a draw");
        }
    }

    console.log("Game has ended!")
    console.log(`Player: ${playerScore} win(s)`);
    console.log(`COM: ${comScore} win(s)`);
}

game(getRoundsCount());
