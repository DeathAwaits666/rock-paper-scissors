function getComputerChoice() {
  random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, or Scissors?");
  humanChoice = humanChoice.toLowerCase();
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    console.log("Error!");
  }
}

console.log(getHumanChoice());

const humanScores = 0;
const computerScores = 0;

console.log(humanScores, computerScores);

function playRound(humanChoice, computerChoice, scores) {
  const choices = ["rock", "paper", "scissors"];

  // Check for valid inputs
  if (!choices.includes(humanChoice) || !choices.includes(computerChoice)) {
    console.log(
      "Invalid choice! Please choose 'rock', 'paper', or 'scissors'."
    );
    return scores;
  }

  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  // Determine the winner
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("Human wins this round!");
    scores.human++;
  } else {
    console.log("Computer wins this round!");
    scores.computer++;
  }

  // Log the updated score
  console.log(`Score - Human: ${scores.human}, Computer: ${scores.computer}`);

  return scores;
}

// Example usage:
let scores = { human: 0, computer: 0 };
scores = playRound("rock", "scissors", scores);
