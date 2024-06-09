//console.log("Hello, World!");

// getComputerChoice logic/algorithm
// 1. Create a new function named getComputerChoice
// 2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// 3. Test what your function returns by using console.log.
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
// getHumanChoice logic/algorithm
// 1. Create a new function named getHumanChoice.
// 2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// 3. Test what your function returns by using console.log.
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
}
getHumanChoice();
// Declare the players score variables
// 1. Create two new variables named humanScore and computerScore in the global scope.
// 2. Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;
// Write the logic to play a single round
// 1. Create a new function named playRound.
// 2. Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// 3. Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// 4. Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// 5. Increment the humanScore or computerScore variable based on the round winner.
function playRound(humanChoice, computerChoice) {}
// Write the logic to play the entire game
// 1. Create a new function named playGame.
// 2. Move your playRound function and score variables so that they’re declared inside of the new playGame function
// 3. Play 5 rounds by calling playRound 5 times.
