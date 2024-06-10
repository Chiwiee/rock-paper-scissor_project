function getComputerChoice() {
  const result = Math.floor(Math.random() * 3) + 1;
  let choice;
  if (result === 1) {
    choice = "Rock";
  } else if (result === 2) {
    choice = "Paper";
  } else {
    choice = "Scissor";
  }
  console.log(choice);
}
getComputerChoice();

function getHumanChoice() {
  let answer = prompt("Please pick between: Rock, Paper, Scissor");

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {}
