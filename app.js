let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomNo = Math.floor(Math.random() * 3) + 1; 
    let computerChoice;
    if (randomNo === 1) computerChoice = "rock";
    else if (randomNo === 2) computerChoice = "paper";
    else if (randomNo === 3) computerChoice = "scissors";
    return computerChoice;
};

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice;
};

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        console.log("You must type \"Rock\", \"Paper\" or \"Scissors\"")
    }
    // humanChoice is Rock
    else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Tied!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
    } 
    // humanChoice is Paper
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Tied!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
    } 
    // humanChoice is Scissors
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Tied!");
    }
};

playRound(humanSelection, computerSelection);