function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerSelection = Math.floor(Math.random() * choices.length);
  return choices[computerSelection];
}

console.log("Computer:", getComputerChoice());

function getHumanChoice() {
  humanChoice = prompt("Rock, Paper, or Scissors?");
  humanChoice = humanChoice.toLowerCase();
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else if (humanChoice === null || humanChoice === "") {
    return "Invalid choice. Please try again.";
  } else {
    alert("Error!");
  }
}

console.log("Human:", getHumanChoice());

function playRound(humanChoice, computerChoice) {
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
}

let scores = { human: 0, computer: 0 };
console.log("Scores:", scores);

function game() {
  const maxRounds = 5;
  let round = 1;

  while (round <= maxRounds) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (typeof humanChoice === "string") {
      playRound(humanChoice, computerChoice);
      round++;
    } else {
      console.log("Game over!");
      break;
    }
  }

  console.log("Final Scores:", scores);
  if (scores.human > scores.computer) {
    console.log("Human wins the game!");
  } else if (scores.human < scores.computer) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

game();
