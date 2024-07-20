const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultEl = document.querySelector("#result-winner");
const humanScoreEl = document.querySelector("#result-human");
const computerScoreEl = document.querySelector("#result-computer");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (randomNo === 1) computerChoice = "rock";
    else if (randomNo === 2) computerChoice = "paper";
    else if (randomNo === 3) computerChoice = "scissors";
    return computerChoice;
};

function getHumanChoice(choice) {
    const humanChoice = choice;
    return humanChoice;
};

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    // humanChoice is Rock
    if (humanChoice === "rock" && computerChoice === "rock") {
        resultEl.textContent = "Tied";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        resultEl.textContent = "You lose! Paper beats Rock";
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultEl.textContent = "You win! Rock beats Scissors";
        humanScore++;
    }
    // humanChoice is Paper
    if (humanChoice === "paper" && computerChoice === "rock") {
        resultEl.textContent = "You win! Paper beats Rock";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        resultEl.textContent = "Tied";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultEl.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    }
    // humanChoice is Scissors
    if (humanChoice === "scissors" && computerChoice === "rock") {
        resultEl.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultEl.textContent = "You win! Scissors beats Paper";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        resultEl.textContent = "Tied";
    }
    humanScoreEl.textContent = `Human: ${humanScore}`;
    computerScoreEl.textContent = `Computer: ${computerScore}`;
    announceScore();
};

function passHumanChoice(choice) {
    const humanChoice = getHumanChoice(choice);
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
};

function announceScore() {
    if (humanScore === 5) {
        resultEl.textContent = "You win!";
        disableChoices();
        newGame();
    } else if (computerScore === 5) {
        resultEl.textContent = "You lose!";
        disableChoices();
        newGame();
    }
};

function newGame() {
    const newGameBtn = document.createElement("button");
    newGameBtn.textContent = "New Game";
    resultEl.append(newGameBtn);
    newGameBtn.addEventListener("click", () => {
        resultEl.textContent = "";
        humanScoreEl.textContent = "Human: 0";
        computerScoreEl.textContent = "Computer: 0";
        humanScore = 0;
        computerScore = 0;
        enableChoices();
    })
}

function disableChoices() {
    paperBtn.disabled = true;
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
};
function enableChoices() {
    paperBtn.disabled = false;
    rockBtn.disabled = false;
    scissorsBtn.disabled = false;
};

rockBtn.addEventListener("click", () => {
    passHumanChoice("rock");
});

paperBtn.addEventListener("click", () => {
    passHumanChoice("paper");
});

scissorsBtn.addEventListener("click", () => {
    passHumanChoice("scissors");
});



