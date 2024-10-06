document.addEventListener("DOMContentLoaded", () => {
  // Get references to the score display, buttons, and input elements
  const scoreDisplay = document.querySelector(".score");
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const restartButton = document.getElementById("clear");
  const roundsInput = document.getElementById("rounds");
  const startGameButton = document.getElementById("start-game");

  // New elements for displaying round result and final result
  const roundResultDisplay = document.getElementById("round-result");
  const finalResultDisplay = document.getElementById("final-result");

  let playerScore = 0;
  let computerScore = 0;
  let rounds = 0; // Number of rounds the player chooses to play
  let currentRound = 0; // Current round number

  // Function to generate computer's choice randomly
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Function to determine the winner
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    }

    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      return "player";
    } else {
      return "computer";
    }
  }

  // Function to update the score
  function updateScore(winner) {
    if (winner === "player") {
      playerScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
    scoreDisplay.textContent = `${playerScore} : ${computerScore}`;
  }

  // Function to handle the player's choice
  function handlePlayerChoice(playerChoice) {
    if (currentRound < rounds) {
      const computerChoice = getComputerChoice();
      const winner = determineWinner(playerChoice, computerChoice);

      currentRound++;
      updateScore(winner);

      // Display the result of the round inside the HTML
      roundResultDisplay.textContent = `Round ${currentRound} of ${rounds}: You chose ${playerChoice}, computer chose ${computerChoice}. ${
        winner === "tie"
          ? "It's a tie!"
          : winner === "player"
          ? "You win this round!"
          : "Computer wins this round!"
      }`;

      // When all rounds are finished, display the final result
      if (currentRound === rounds) {
        displayFinalResult();
        disableButtons(); // Disable the buttons after the game is over
      }
    }
  }

  // Function to display the final result
  function displayFinalResult() {
    if (playerScore > computerScore) {
      finalResultDisplay.textContent = `Game Over! You won the game with a score of ${playerScore} : ${computerScore}`;
    } else if (computerScore > playerScore) {
      finalResultDisplay.textContent = `Game Over! The computer won the game with a score of ${computerScore} : ${playerScore}`;
    } else {
      finalResultDisplay.textContent = `Game Over! It's a tie with a score of ${playerScore} : ${computerScore}`;
    }
  }

  // Function to enable the game buttons
  function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
  }

  // Function to disable the game buttons
  function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }

  // Add event listeners to the buttons
  rockButton.addEventListener("click", () => handlePlayerChoice("rock"));
  paperButton.addEventListener("click", () => handlePlayerChoice("paper"));
  scissorsButton.addEventListener("click", () =>
    handlePlayerChoice("scissors")
  );

  // Function to start the game
  function startGame() {
    rounds = parseInt(roundsInput.value, 10); // Get the number of rounds from the input
    if (isNaN(rounds) || rounds <= 0) {
      finalResultDisplay.textContent = "Please enter a valid number of rounds.";
      return;
    }
    currentRound = 0;
    playerScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = "0 : 0";
    roundResultDisplay.textContent = ""; // Clear previous round results
    finalResultDisplay.textContent = ""; // Clear previous final results
    enableButtons(); // Enable the game buttons once the game starts
  }

  // Add event listener to the start game button
  startGameButton.addEventListener("click", startGame);

  // Function to reset the game
  function resetGame() {
    roundsInput.value = ""; // Clear the rounds input
    disableButtons(); // Disable buttons until the game starts again
    scoreDisplay.textContent = "0 : 0";
    roundResultDisplay.textContent = ""; // Clear the round result
    finalResultDisplay.textContent = ""; // Clear the final result
  }

  // Add event listener to the restart button
  restartButton.addEventListener("click", resetGame);

  // Initially disable the game buttons
  disableButtons();
});
