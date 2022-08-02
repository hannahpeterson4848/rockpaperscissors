//create a variable for the intended user input
let options = ["rock", "paper", "scissors"];
let userChoice;
//prompt user to enter rock paper or scissors
function getUserChoice (){
    userChoice = prompt("Please select rock, paper, or scissors.");
//if (userChoice == "rock" || "paper" || "scissors" || userError ());
//let user choice be case insensitive
    userChoice = userChoice.toLowerCase();
    if (userChoice === ("scissors"))
        (userChoice = "scissors");
    else if (userChoice === ("rock")) 
        userChoice = ("rock");
    else if (userChoice === ("paper")) 
        userChoice = ("paper");
        else { userError()};
    return userChoice;
    }
//create a function to re-prompt user if input does not equal rock paper or scissors
function userError (){
    if (options.includes(userChoice) == true){
    ("");}
    else {getUserChoice();
    };
} 
// the computer randomly selects either rock paper or scissors 
let computerChoice;

function getComputerChoice (){
let randomOption = Math.floor(Math.random()*options.length);
computerChoice = options[randomOption];
return computerChoice;
}
// compare the values the user entered and the computer chose and determine a winner assuming paper beats rock, rock beats scissors, scissors beats paper 
let roundOutcome;
// create an variable to track user and computer score
let userScore = 0;
let computerScore=0;
// create a function to play one round of the game
function playRound (){
    getComputerChoice ();
    getUserChoice();
    console.log(computerChoice);
    console.log(userChoice);
    if (userChoice == "rock" && computerChoice == "paper") {
        roundOutcome = ("You Lost!");
        userScore --;
        computerScore ++;
        console.log (roundOutcome);
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        roundOutcome = ("You Lost!");
        userScore --;
        computerScore ++;
        console.log (roundOutcome);
    } else if (userChoice == "scissors" && computerChoice == "rock"){
        roundOutcome = ("You Lost!");
        userScore --;
        computerScore ++;
        console.log (roundOutcome);
    } else if (userChoice == computerChoice) {
        roundOutcome = ("You Tied!");
        console.log (roundOutcome);
    }  else {
        roundOutcome = ("You Won!");
        userScore ++;
        computerScore --;
        console.log (roundOutcome);
    }
}
//create a variable to store the results of 1 round 
let gameResults;
//create a function that plays 5 rounds 
function game (){
    for (let i = 0; i < 5; i++) {
    //call playRound function 5 times
    gameResults = playRound ();
    }
    //determine score outcome
    if (userScore>computerScore) {
       console.log("You won the game!");
    } else if (userScore=computerScore){
        console.log ("You tied!")
    } else {
        console.log("You lost the game.")
    }

}
//play a game 
game ();



