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
