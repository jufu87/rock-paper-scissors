const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const choices = ["rock", "paper", "scissors"];
let round = 1;
let humanScore = 0
let computerScore = 0
let game = "";

function getComputerChoice() {
    let computerInput = choices[Math.floor(Math.random() * 3)];
    return computerInput;
}

function playRound(humanChoice, computerChoice) {
    console.log("Computer selected " + computerChoice);
    console.log("You selected " + humanChoice);
    round++;

    
    if (humanChoice === computerChoice) {
        game = "You tied this round!";
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
        }
    }
    
    // while (humanScore < 6 || computerScore < 6) {
    //     console.log("Computer score = " + computerScore);
    //     console.log("Your score = " + humanScore);
    //     if (humanScore !== 6 || computerScore !== 6) {
    //         console.log("Next up round " + round);
    //     } else {
    //         console.log("Game finished!");
    //     }
    // }

    if (game === "You won this round.") {
        humanScore++;
        console.log(game);

    } else if (game === "You lost this round.") {
        computerScore++;
        console.log(game);
    } else {
        console.log(game);
    }
    console.log("Computer score = " + computerScore);
    console.log("Your score = " + humanScore);


    if (humanScore === 5) {
        alert("YOU HAVE WON THE GAME! CONGRATULATIONS!");
        return;
    } else if (computerScore === 5) {
        alert("COMPUTER HAS WON THE GAME! BETTER LUCK NEXT TIME!");
        return;
    };
    


    return;
}

console.log("hscore: " + humanScore);
console.log("cscore: " + computerScore);
console.log("round: " + round);




btnRock.addEventListener("click", event => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

btnPaper.addEventListener("click", event => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

btnScissors.addEventListener("click", event => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});