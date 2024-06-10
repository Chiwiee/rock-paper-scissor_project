// Step 1
function getComputerChoice() {
  const result = Math.floor(Math.random() * 3) + 1;
  if (result === 1) {
    return "Rock";
  } else if (result === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
  console.log(choice);
}
getComputerChoice();
// Step 2
function getHumanChoice() {
  const answer = prompt("Please pick between: Rock, Paper, Scissor");

  if (answer === "rock") {
    return "Rock";
  } else if (answer === "paper") {
    return "Paper";
  } else if (answer === "scissor") {
    return "Scissor";
  } else {
    alert(`Please pick a valid answer`);
  }
  console.log(answer);
}
getHumanChoice();
// Step 3
let humanScore = 0;
let computerScore = 0;
// Step 4
function playRound(humanChoice, computerChoice) {}
