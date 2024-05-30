const resultsDiv = document.querySelector("#results-div");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const computerChoseTextLi = document.querySelector("#computerChoseTextLi");
const humanChoseTextLi = document.querySelector("#humanChoseTextLi");
const resultLi = document.querySelector("#resultLi");
const computerScoreLi = document.querySelector("#computerScoreLi");
const humanScoreLi = document.querySelector("#humanScoreLi");
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
    computerChoseTextLi.textContent = "Computer selected: " + computerChoice;
    humanChoseTextLi.textContent = "You selected: " + humanChoice;
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
 
    if (game === "You won this round.") {
        humanScore++;
        console.log(game);
        resultLi.textContent = game;

    } else if (game === "You lost this round.") {
        computerScore++;
        console.log(game);
        resultLi.textContent = game;
    } else {
        console.log(game);
        resultLi.textContent = game;
    }


    computerScoreLi.textContent = "Computer score: " + computerScore;
    humanScoreLi.textContent = "Your score: " + humanScore;
    console.log("Computer score = " + computerScore);
    console.log("Your score = " + humanScore);

    if (humanScore === 5) {
        resultLi.textContent = "YOU HAVE WON THE GAME! CONGRATULATIONS";
        humanScore = 0;
        computerScore = 0;
        return;
    } else if (computerScore === 5) {
        resultLi.textContent = "COMPUTER HAS WON THE GAME! BETTER LUCK NEXT TIME!";
        humanScore = 0;
        computerScore = 0;
        return;
    };
    
    return;
}

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
