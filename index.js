console.log("Rock, Paper, Scissors");

// Pseudocode:

// Computer choice:
//  getComputerChoice will RANDOMLY RETURN one of the following string values: "rock", "paper", "scissors".
//      RETURN a RANDOM value of 0 - 1
//      MULTIPLY that value into 1 - 3    
//      Assign a STRING to that value upon RETURN

function getComputerChoice () {
    
    let computerDice = Math.floor(Math.random() * 3) + 1;
    console.log(computerDice);
    
    if (computerDice === 1) {
        console.log("Computer has Rock");
    } else if (computerDice === 2) {
        console.log("Computer has Paper");
    } else {
        console.log("Computer has Scissors");
    }
}

getComputerChoice()
//console.log("This is console log 2 to test scope. X equals: " + x);           This does not work because x is not in the global scope?

