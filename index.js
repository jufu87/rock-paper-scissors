console.log("Rock Paper Scissors");

// Pseudocode:

// Computer choice:
//  getComputerChoice will RANDOMLY RETURN one of the following string values: "rock", "paper", "scissors".
//      RETURN a RANDOM value of 1 - 3    
//      Assign a STRING to that value
// 
// 
// 


function getComputerChoice () {
    
    let x = Math.floor(Math.random() * 3) + 1;
    console.log(x);
    
    if (x === 1) {
        console.log("Computer has Rock");
    } else if (x === 2) {
        console.log("Computer has Paper");
    } else {
        console.log("Computer has Scissors");
    }
}

getComputerChoice()

//console.log("This is console log 2 to test scope. X equals: " + x);           This does not work because x is not in the global scope?

