//create a variable for the intended user input
let options = ["rock", "paper", "scissors"];
let userChoice; 
// create a variable to track the outcome of a round
let roundOutcome;
// create variables to track user and computer score
let userScore = 0;
let computerScore=0;

const btnRock = document.querySelector(".button-rock");
const btnPaper = document.querySelector(".button-paper");
const btnScissors = document.querySelector(".button-scissors");

let computerChoice;

function getComputerChoice (){
    let randomOption = Math.floor(Math.random()*options.length);
    computerChoice = options[randomOption];
    return computerChoice;
}

function playRound (userChoice){
    getComputerChoice ();
    console.log(computerChoice);
    console.log(userChoice);
    if (userChoice == "rock" && computerChoice == "paper") {
        roundOutcome = ("You Lost!");
        userScore --;
        computerScore ++;
        alert (roundOutcome);
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        roundOutcome = ("You Lost!");
        userScore --;
        computerScore ++;
        alert (roundOutcome);
    } else if (userChoice == "scissors" && computerChoice == "rock"){
        roundOutcome = ("You Lost!");
        userScore --;
        computerScore ++;
        alert (roundOutcome);
    } else if (userChoice == computerChoice) {
        roundOutcome = ("You Tied!");
        alert (roundOutcome);
    }  else {
        roundOutcome = ("You Won!");
        userScore ++;
        computerScore --;
        alert (roundOutcome);
    }
}
btnRock.addEventListener ('click', function () {
    playRound("rock");
});

btnPaper.addEventListener ('click', function () {
    playRound("paper");
});

btnScissors.addEventListener ('click', function () {
    playRound("scissors");
});














// create a function to play one round of rock, paper, scissors

//let gameResults;
//create a function that plays 5 rounds of rock paper scissors
//function playGame (){
  //  for (let i = 0; i < 5; i++) {
    //call playRound function 5 times
    //gameResults = playRound ();
    //}
    //determine score outcome
    //if (userScore>computerScore) {
      // console.log("You won the game!");
    //} else if (userScore=computerScore){
        //console.log ("You tied!")
    //} else {
        //console.log("You lost the game.")
    //}
//}
//play a game 
//playGame ();



