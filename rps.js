// the user enters either rock, paper, or scissors 
let userChoice = prompt("Please select rock, paper, or scissors.");
// if the user enters any other choice, an error is displayed

if (userChoice ===("scissors")){
    ("");
} else if (userChoice===("rock")){
    ("");
} else if (userChoice===("paper")){
    ("");
} else {
    alert("Error")
};
console.log (userChoice);

// the computer randomly selects either rock, paper, 
//or scissors 

let options = ["rock", "paper", "scissors"];
let computerChoice;

function getComputerChoice (){
let randomOption = Math.floor(Math.random()*options.length);
computerChoice = options[randomOption];
return computerChoice;
}
console.log(getComputerChoice ());

// compare the values the user entered and the computer chose 
//and determine a winner assuming paper beats rock, 
//rock beats scissors, scissors beats paper 

// if the computers choice and users choice are the same, display message "You tied"
if (userChoice == computerChoice) {
    alert("You Tied!");
}
// if computer wins, display message "Sorry, you lost"
// if user wins, display message "You won!"

