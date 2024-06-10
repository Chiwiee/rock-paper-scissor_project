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

// Step 5

function playGame() {
  // Step 3

  let humanScore = 0;
  let computerScore = 0;

  // Step 4

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
      humanScore += 1;
      computerScore += 1;
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

  console.log(`Game Result: ${playRound()}`);
  console.log(`You Choose: ${humanChoice}`);
  console.log(`Computer Choose: ${computerChoice}`);
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}
playGame();
