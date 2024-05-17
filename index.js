console.log("Rock, Paper, Scissors");

let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

// Computer choice:
//  getComputerChoice will RANDOMLY RETURN one of the following string values: "rock", "paper", "scissors".
//      Generate a random value from 0 to 1
//      Round and multiply that value until you get a number from 0 to 2    
//      Assign that value to a string via a list
//      

function getComputerChoice() {
    
    let computerInput = choices[Math.floor(Math.random() * 3)];
    // Originally this was "let computerResult". It worked, but
    // I was not sure how a LET inside a function of an already assigned 
    // global CONST behaves so I made a new variable: "computerInput".
    // Why did this work?
    // This is something that needs research

    return computerInput;
}

//  Write a prompt with three valid inputs
//  Loop function if input is invalid

function getHumanChoice() {
    
    let humanInput = prompt("Rock, Paper or Scissors?");
    // if (humanInput.toLowerCase() === "rock" || "paper" || "scissors") {
    //     return humanInput;
    // } else {
    //     alert("not a valid choice");
    // }
    // Was trying to be clean but this did not work. Not enough knowledge of syntax.

    if (humanInput.toLowerCase() === "rock") {
        return humanInput.toLowerCase();
    } else if (humanInput.toLowerCase() === "paper") {
        return humanInput.toLowerCase();
    } else if (humanInput.toLowerCase() === "scissors") {
        return humanInput.toLowerCase();
    } else {
        alert("Invalid choice! Try again.");
        return getHumanChoice();
    }

}

function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Computer selected " + computerSelection);
console.log("You selected " + humanSelection);