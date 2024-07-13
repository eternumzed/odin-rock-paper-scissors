function getComputerChoice() {
    let randomNo = Math.floor(Math.random() * 3) + 1; 
    let computerChoice;
    if (randomNo === 1) computerChoice = "rock";
    else if (randomNo === 2) computerChoice = "paper";
    else if (randomNo === 3) computerChoice = "scissors";
    return computerChoice;
}

