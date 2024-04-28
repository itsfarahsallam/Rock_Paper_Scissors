
function getComputerChoice() 
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

function getHumanChoice() 
{
    // Prompt the user for input
    let userInput = prompt("Enter your choice: rock, paper or scissors");

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

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) 
{
    // Define the rules of the game
    const rules = {
        rock: { beats: 'scissors' },
        paper: { beats: 'rock' },
        scissors: { beats: 'paper' }
    };

    // Check if it's a tie
    if (humanChoice === computerChoice) 
    {
        console.log("It's a tie!");
        return;
    }

    // Check if human wins
    if (rules[humanChoice]?.beats === computerChoice) 
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++; // Increment humanScore
    } 
    else 
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++; // Increment computerScore
    }
}

// Get human and computer choices
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Play the round
playRound(humanSelection, computerSelection);

// Additional rounds for testing purposes
playRound('rock', 'scissors');
playRound('paper', 'scissors');
playRound('rock', 'paper');

// Display scores
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
