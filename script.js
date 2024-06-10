// Step 1
function getComputerChoice() {
  const result = Math.floor(Math.random() * 3) + 1;
  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}
getComputerChoice();
// Step 2
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
    alert(`Please pick a valid answer`);
  }
}
getHumanChoice();
// Step 3
let humanScore = 0;
let computerScore = 0;
// Step 4
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Draw!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    return "You Lose! Paper beats Rock";
  }
}
