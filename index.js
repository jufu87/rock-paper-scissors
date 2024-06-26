const headerDiv = document.querySelector("#header");
const resultsDiv = document.querySelector("#results-div");
const newGameBtn = document.querySelector("#newGame");
const choiceBtns = document.querySelector("#choiceBtns");
const winMessageDiv = document.querySelector("#winMessageDiv");
const winMessageParagraph = document.querySelector("#winMessageParagraph");
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

choiceBtns.style.display = "none";     //   hide buttons div, enable with New Game
winMessageDiv.style.display = "none";

function getComputerChoice() {
    let computerInput = choices[Math.floor(Math.random() * 3)];
    return computerInput;
}

function playRound(humanChoice, computerChoice) {
    computerChoseTextLi.textContent = "Computer chose: " + computerChoice;
    humanChoseTextLi.textContent = "You chose: " + humanChoice;
    round++;

    if (humanChoice === computerChoice) {
        game = "You tied this round";
    } else {
        switch(humanChoice)  {
            case "rock":
                game = (computerChoice === "scissors") ? "You won this round": "You lost this round";
                break;
            case "paper":
                game = (computerChoice === "rock") ? "You won this round": "You lost this round";
                break;
            case "scissors":
                game = (computerChoice === "paper") ? "You won this round": "You lost this round";
                break;
        }
    }
 
    if (game === "You won this round") {
        humanScore++;
        resultLi.textContent = game;
    } else if (game === "You lost this round") {
        computerScore++;
        resultLi.textContent = game;
    } else {
        resultLi.textContent = game;
    }

    computerScoreLi.textContent = "Computer score: " + computerScore;
    humanScoreLi.textContent = "Your score: " + humanScore;
   
    if (humanScore === 5) {
        winMessageParagraph.textContent = "YOU WON!";
        hideChoiceBtns();
        return;
    } else if (computerScore === 5) {
        winMessageParagraph.textContent = "YOU LOST!";
        hideChoiceBtns();
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

function showChoiceBtns() {
    choiceBtns.style.display = "flex";
    humanScore = 0;
    computerScore = 0;
    computerChoseTextLi.textContent = "Computer";
    humanChoseTextLi.textContent = "You"
    resultLi.textContent = "Round result";
    computerScoreLi.textContent = "Compuer score";
    humanScoreLi.textContent = "Your Score";
    winMessageDiv.style.display = "none";
}

function hideChoiceBtns() {
    choiceBtns.style.display = "none";
    winMessageDiv.style.display = "flex";
}

newGameBtn.addEventListener("click", showChoiceBtns);