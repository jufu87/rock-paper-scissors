console.log("Rock, Paper, Scissors");


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

    if (humanInput.toLowerCase() === "rock") {   // this toLowerCase is so that player can input any combination of capitalisation
        return humanInput.toLowerCase();        // this toLowerCase is so that the RETURN is lower case.
    } else if (humanInput.toLowerCase() === "paper") {
        return humanInput.toLowerCase();
    } else if (humanInput.toLowerCase() === "scissors") {
        return humanInput.toLowerCase();
    } else {
        alert("Invalid choice! Try again.");
        return getHumanChoice();
    }

    // was not sure of a way (if there is one) to access the choices const I made for the IF statement

}


// Include pseudocode here. I kind of cheated and skipped that.
// Didn't know how to formulate my plan (which you would say means I
// did not understand it, which seems to be a basic misunderstanding
// of how the brain works).
// There are ppl out there who have never learned or think in a language at all!
// They are just as smart!

function playRound(humanChoice, computerChoice) {
    console.log("Computer selected " + computerChoice);
    console.log("You selected " + humanChoice);

    
    
    if (humanChoice === computerChoice) {
        return game = "Tie";
    } else {
        switch(humanChoice)  {
            case "rock":
                game = (computerChoice === "scissors") ? "You won": "You lost";
                break;
            case "paper":
                game = (computerChoice === "rock") ? "You won": "You lost";
                break;
            case "scissors":
                game = (computerChoice === "paper") ? "You won": "You lost";
                break;
        // if i get rid of "game" can I include the Score increments within the ternery syntax?
        // When I tried to include it, it logged a "0" at the end of the string.
        // how do I then RETURN the appropriate results?
        }
    }
    
    
    
    if (game === "You won") {
        humanScore++;
    } else if (game === "You lost") {
        computerScore++;
    }
    return game;



    // I COULD make a giant long "if else" statement (9 times!) but that seems silly, trying to use ternary/switch



}


//  Move the function and the score variables within the playRound function
//  When a round finishes increment a variable on how many rounds have been played by 1
//  Create a loop that stops once that variable reaches 5

function playGame() {
   




}

let humanScore = 0
let computerScore = 0
let playedRounds = 0
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(game);