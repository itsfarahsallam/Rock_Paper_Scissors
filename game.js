
function getComputerChoice 
{
    const randomNumber = Math.random();
    if (randomNumber < 0.33) 
    {
        return "rock";
    } 
    else if (randomNumber < 0.66) 
    {
        return "paper";
    } 
    else 
    {
        return "scissors";
    }
}

function getHumanChoice
{
    // Convert user input to lowercase for case-insensitive comparison
    userInput = userInput.toLowerCase();

    // Array of valid choices
    const validChoices = ["rock", "paper", "scissors"];

    // Check if the user input is one of the valid choices
    if (validChoices.includes(userInput)) 
    {
        return userInput;
    } 
    else 
    {
        // If the input is not valid, return a message indicating so
        return "Invalid choice. Please choose either 'rock', 'paper', or 'scissors'.";
    }
}

const userInput = prompt("Enter your choice: ");
const humanChoice = getHumanChoice(userInput);

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) 
{
    // your code here!
  
}
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  