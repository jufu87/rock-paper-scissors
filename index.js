console.log("Rock, Paper, Scissors. 5 Rounds!!");
let round = 1;

const choices = ["rock", "paper", "scissors"];


//  PSEUDOCODE:
//  Computer choice:
//  getComputerChoice will RANDOMLY RETURN one of the following string values: "rock", "paper", "scissors".
//      Generate a random value from 0 to 1
//      Round and multiply that value until you get a number from 0 to 2    
//      Assign that value to a string via a list. 

function getComputerChoice() {
    
    let computerInput = choices[Math.floor(Math.random() * 3)];
    // ^^ Originally this was "let computerSelection". It worked, but
    // I was not sure how a LET of an already assigned 
    // global CONST behaves inside a function, so I made a new variable: "computerInput".
    // Why did computerSelection work?
    // This needs research
    // computerSelection and humanSelection was later moved inside the playGame function.

    return computerInput;
}

//  PSEUDOCODE:
//  When user writes into a prompt
//  accept any combinations of lower and upper cases, convert into lowercase.
//  If user inputs something outside of the 3 valid strings, repeat the prompt with an error message
//  If input is valid, RETURN the input as a string.

function getHumanChoice() {
    
    let humanInput = prompt("Round " + round + " of 5 of Rock, Paper or Scissors! Results in the console!");
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


//  PSEUDOCODE:
//  Move the playRound function and the score variables within the playGame function
//  When a round finishes increment a variable on how many rounds have been played by 1
//  Create a loop that stops when said variable reaches 5

function playGame() {
    let humanScore = 0
    let computerScore = 0
    
        function playRound(humanChoice, computerChoice) {
            console.log("Computer selected " + computerChoice);
            console.log("You selected " + humanChoice);
            round++;
            
            if (humanChoice === computerChoice) {
                return game = "You tied this round!";
            } else {
                switch(humanChoice)  {
                    case "rock":
                        game = (computerChoice === "scissors") ? "You won this round.": "You lost this round.";
                        break;
                    case "paper":
                        game = (computerChoice === "rock") ? "You won this round.": "You lost this round.";
                        break;
                    case "scissors":
                        game = (computerChoice === "paper") ? "You won this round.": "You lost this round.";
                        break;
                // if i get rid of "game" can I include the Score increments within the ternery syntax?
                // When I tried to include it, it logged a "0" at the end of the string.
                // how do I then RETURN the appropriate results?
                // Also, I COULD make a giant long "if else" statement (9 times!) but that seems silly, trying to use ternary/switch
                }
            }
            
            if (game === "You won this round.") {
                humanScore++;
            } else if (game === "You lost this round.") {
                computerScore++;
            }
            return game;
        }
    
        // This is the loop to call playRound 5 times:
        while (round !== 6) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice(); 
            playRound(humanSelection, computerSelection);
            console.log(game);
            console.log("Computer score = " + computerScore);
            console.log("Your score = " + humanScore);
            
            if (round !== 6) {
                console.log("Next up round " + round);
            } else {
                console.log("Game finished!");
            }
        }
    
        // This is the code for win declarations.
        if (humanScore > computerScore) {
            console.log("YOU HAVE WON THE GAME! CONGRATULATIONS!");
        } else if (humanScore < computerScore) {
            console.log("COMPUTER HAS WON THE GAME! BETTER LUCK NEXT TIME!");
        } else {
            console.log("THE GAME WAS A TIE! HOW BORING!");
        }
    }

playGame();