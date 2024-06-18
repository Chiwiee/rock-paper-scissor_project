function getComputerChoice() {
  const result = Math.floor(Math.random() * 3) + 1;
  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else if (result === 3) {
    return "scissor";
  }
}

// Score Count
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let round = 1;

const button = document.querySelectorAll("button");
button.forEach((button) => {
  button.addEventListener("click", function (e) {
    function playGame() {
      const playerSelection = button.id;

      const computerChoice = getComputerChoice();
      function playRound(playerSelection, computerChoice) {
        if (playerSelection === computerChoice) {
          tieScore += 1;
          round += 1;
          return "Draw!";
        } else if (playerSelection === "rock" && computerChoice === "paper") {
          computerScore += 1;
          round += 1;
          return "You Lose! Paper beats Rock";
        } else if (
          playerSelection === "paper" &&
          computerChoice === "scissor"
        ) {
          computerScore += 1;
          round += 1;
          return "You Lose! Scissor beats Paper";
        } else if (playerSelection === "scissor" && computerChoice === "rock") {
          computerScore += 1;
          round += 1;
          return "You Lose! Rock beats Scissor";
        } else {
          humanScore += 1;
          round += 1;
          return "You Win!";
        }
      }

      // Scoring, Tie Count and Game Result
      const result = document.querySelector("#result");
      result.textContent = `Game Result: ${playRound(
        playerSelection,
        computerChoice
      )}`;

      // Player Pick
      const playerPick = document.querySelector("#player-pick");
      playerPick.textContent = `Computer Pick: ${playerSelection}`;
      // Computer Pick
      const computerPick = document.querySelector("#computer-pick");
      computerPick.textContent = `Computer Pick: ${computerChoice}`;
      // Player Score
      const playerScore = document.querySelector("#player-score");
      playerScore.textContent = `Player Score: ${humanScore}`;
      // ComputerScore
      const botScore = document.querySelector("#computer-score");
      botScore.textContent = `Computer Score: ${computerScore}`;
      // Tie Count
      const tieCount = document.querySelector("#tie-count");
      tieCount.textContent = `Tie: ${tieScore}`;
      // Round Count
      const roundCount = document.querySelector("#round");
      roundCount.textContent = `Round: ${round}`;
    }
    playGame();
  });
});
