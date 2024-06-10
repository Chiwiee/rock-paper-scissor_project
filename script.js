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
// Step 3
let humanScore = 0;
let computerScore = 0;
// Step 4
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Draw!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    return "You Lose! Scissor beats Paper";
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    return "You Lose! Rock beats Scissor";
  } else {
    return "You Win!";
  }
}
const humanSelection = getHumanChoice();
const computerChoice = getComputerChoice();
