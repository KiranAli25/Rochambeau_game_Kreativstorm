const MAX_ROUNDS = 5;
const GUESS_OPTIONS = ["Rock", "Paper", "Scissors"];

const ALIEN_TAUNTS = [
    "Earthling, your primitive choices amuse me! 👽",
    "My quantum brain sees all possibilities! 🌌",
    "Is this really how you defend your planet? 🛸"
];

const computerPlay = function () {
    return GUESS_OPTIONS[Math.floor(Math.random() * GUESS_OPTIONS.length)];
}

const getUserSelection = () => {
    let userInput;
    let userAttempts = 0;

    while (true) {
        const taunt = ALIEN_TAUNTS[Math.floor(Math.random() * ALIEN_TAUNTS.length)];
        const promptMessage = userAttempts === 0 ?
            `${taunt}\nChoose your weapon (Rock, Paper, Scissors)` :
            `Invalid choice, Earth defender! Choose Rock, Paper, or Scissors`;

        userInput = prompt(promptMessage);

        if (userInput === null) {
            alert('Earth surrenders!');
            return null;
        }

        userInput = userInput.trim().toLowerCase();
        const validOptions = GUESS_OPTIONS.map(option => option.toLowerCase());

        if (validOptions.includes(userInput)) {
            return GUESS_OPTIONS[validOptions.indexOf(userInput)];
        }

        userAttempts++;
    }
}

const checkWinner = function (playerSelection, computerSelection) {
    if (playerSelection == GUESS_OPTIONS[0]) {
        switch (computerSelection) {
            case GUESS_OPTIONS[0]: return "Cosmic stalemate! 🌠";
            case GUESS_OPTIONS[1]: computerScore++; return "The alien's Paper crushes your Rock! 📜";
            case GUESS_OPTIONS[2]: playerScore++; return "Your Rock smashes alien Scissors! 🚀";
        }
    }
    else if (playerSelection == GUESS_OPTIONS[1]) {
        switch (computerSelection) {
            case GUESS_OPTIONS[0]: playerScore++; return "Your Paper wraps the alien Rock! 🌍";
            case GUESS_OPTIONS[1]: return "Parallel dimensions collide! Draw! ⭐";
            case GUESS_OPTIONS[2]: computerScore++; return "Alien Scissors slice your Paper! ✨";
        }
    }
    else if (playerSelection == GUESS_OPTIONS[2]) {
        switch (computerSelection) {
            case GUESS_OPTIONS[0]: computerScore++; return "Alien Rock pulverizes your Scissors! 💫";
            case GUESS_OPTIONS[1]: playerScore++; return "Your Scissors cut through alien Paper! 🛸";
            case GUESS_OPTIONS[2]: return "Quantum entanglement! Draw! 🌌";
        }
    }
    return "Space-time anomaly detected!";
}

const playRound = function () {
    let alienChoice = computerPlay();
    let playerChoice = getUserSelection();

    if (playerChoice == null)
        return null;

    const result = checkWinner(playerChoice, alienChoice);

    alert(`Battle Result:\nEarth chose: ${playerChoice}\nAlien chose: ${alienChoice}\n${result}\n\nScore:\nEarth: ${playerScore}\nAlien: ${computerScore}`);

    return 'continue';
}

const askForRestart = function () {
    return confirm("Play again to defend Earth?");
}

const game = function () {
    do {
        alert("🛸 ALIEN CHALLENGE 🛸\n\nAn alien has challenged Earth to Space Rock-Paper-Scissors!\nDefend your planet in this 5-round battle!");

        reset();

        let playerQuit = false;
        for (let i = 0; i < MAX_ROUNDS; i++) {
            playerQuit = playRound() == null;
            if (playerQuit)
                break;
        }

        if (playerQuit)
            continue;

        if (playerScore > computerScore) {
            alert("Victory! Earth is saved! 🌍✨");
        } else if (playerScore < computerScore) {
            alert("Defeat! The alien laughs in binary! 👽");
        } else {
            alert("A cosmic draw! The alien demands a rematch! 🌠");
        }
    } while (askForRestart());

    alert("Thanks for defending Earth! 🌎");
}

const reset = function () {
    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

game();