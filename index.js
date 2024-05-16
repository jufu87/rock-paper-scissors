console.log("Rock, Paper, Scissors");

// Pseudocode:

// Computer choice:
//  getComputerChoice will RANDOMLY RETURN one of the following string values: "rock", "paper", "scissors".
//      Generate a random value from 0 to 1
//      Convert that value until you get a number from 1 to 3    
//      Print a STRING according to that value

function getComputerChoice () {
    
    let computerDice = Math.floor(Math.random() * 3) + 1;
    //console.log(computerDice);
    
    if (computerDice === 1) {
        console.log("Computer played Rock");
    } else if (computerDice === 2) {
        console.log("Computer played Paper");
    } else {
        console.log("Computer played Scissors");
    }
}
//console.log("This is a console.log to test scope. Computer roll = " + computerDice);      --This does not work because computerDice is not in the global scope?


// -------------------------------------------


// Player choice:
//      When the user inputs one of three string choices
//      Make sure it is not case-sensitive   
//      Print a new string according to the choice
//      If user inputs invalid choice
//      Notify and restart input

function getHumanChoice () {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        console.log("You played Rock");
    } else if (humanChoice.toLowerCase() === "paper") {
        console.log("You played Paper");
    } else if (humanChoice.toLowerCase() === "scissors") {
        console.log("You played Scissors")
    } else {
        alert("Not a valid choice!");
        getHumanChoice();
    }
}

getHumanChoice()
getComputerChoice()