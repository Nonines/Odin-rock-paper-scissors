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
        const choice = prompt("Make a choice (Rock, Paper, Scissors)");
        try {
            const lowerCaseChoice = choice.toLowerCase();
            if (choices.includes(lowerCaseChoice)) {
                return choice;
            } else {
                alert("Invalid choice!");
            }
        }
        catch {
            // pass
        }
    }
}

function playRound(playerChoice, comChoice) {
    console.log(`Your choice: ${playerChoice},` + ` COM's choice: ${comChoice}`);
    let winner;

    if (playerChoice === comChoice) {
        console.log("This round ended in a draw.");
        winner = "draw";

    } else if (playerChoice === "rock" && comChoice === "scissors") {
        console.log("You win this round.");
        winner = "player";

    } else if (playerChoice === "paper" && comChoice === "rock") {
        console.log("You win this round.");
        winner = "player";

    } else if (playerChoice === "scissors" && comChoice === "paper") {
        console.log("You win this round.");
        winner = "player";

    } else {
        console.log("COM wins this round.")
        winner = "com";
    }

    return winner;
}

function getRoundsCount() {
    while (true) {
        const totalRounds = parseInt(prompt("How many rounds do you want to play?", "5"));
        if (isNaN(totalRounds) || totalRounds <= 0) {
            alert("Input integers greater than 1 only!");
        } else {
            return totalRounds;
        }
    }
}

function game(rounds) {
    let playerScore = 0,
        comScore = 0,
        draws = 0;

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
                draws++;
        }
    }

    console.log("Game has ended!");
    console.log(`Player: ${playerScore} win(s)`);
    console.log(`COM: ${comScore} win(s)`);
    console.log(`Draw(s): ${draws}`);

    if (playerScore > comScore) {
        console.log("You won the game!!!");
    } else if (playerScore < comScore) {
        console.log("You lost! COM wins the game!!!");
    } else {
        console.log("Good game! It was a tie!!!");
    }
}

game(getRoundsCount());
