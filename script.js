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

function getHumanChoice() {
  const answer = prompt(
    "Please pick between: Rock, Paper, Scissor"
  ).toLowerCase();

  if (answer === "rock") {
    return "rock";
  } else if (answer === "paper") {
    return "paper";
  } else if (answer === "scissor") {
    return "scissor";
  } else {
    for (let i = 0; i < answer; i++) {
      alert(`Please pick a valid answer`);
      return answer;
    }
  }
}
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      tieScore += 1;
      return "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
      return "You Lose! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      computerScore += 1;
      return "You Lose! Scissor beats Paper";
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      computerScore += 1;
      return "You Lose! Rock beats Scissor";
    } else {
      humanScore += 1;
      return "You Win!";
    }
  }

  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  // Scoring, Tie Count and Game Result
  const result = document.querySelector("#result");
  result.textContent = `Game Result: ${playRound(humanChoice, computerChoice)}`;

  const playerPick = document.querySelector("#player-pick");
  playerPick.textContent = `Player Pick: ${humanChoice}`;

  const computerPick = document.querySelector("#computer-pick");
  computerPick.textContent = `Computer Pick: ${computerChoice}`;

  const playerScore = document.querySelector("#player-score");
  playerScore.textContent = `Player Score: ${humanScore}`;

  const botScore = document.querySelector("#computer-score");
  botScore.textContent = `Computer Score: ${computerScore}`;

  const tieCount = document.querySelector("#tie-count");
  tieCount.textContent = `Tie: ${tieScore}`;
}

const play = document.querySelector("#play-btn");
play.addEventListener("click", () => {
  playGame();
});
