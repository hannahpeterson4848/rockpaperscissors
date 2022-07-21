let options = ["rock", "paper", "scissors"];
let userChoice;

//prompt user to enter rock paper or scissors
function getUserChoice (){
    userChoice = prompt("Please select rock, paper, or scissors.");
//    if (userChoice == "rock" || "paper" || "scissors" || userError ());
    if (userChoice === ("scissors"))
        (userChoice = "scissors");
    else if (userChoice === ("rock")) 
        userChoice = ("rock");
    else if (userChoice === ("paper")) 
        userChoice = ("paper");
        else { userError()};
    return userChoice;
    }
//re-prompt user if input does not equal rock paper or scissors
function userError (){
    if (options.includes(userChoice) == true){
    ("");}
    else {getUserChoice();
    };
} 

console.log(getUserChoice ());

// the computer randomly selects either rock paper or scissors 

let computerChoice;

function getComputerChoice (){
let randomOption = Math.floor(Math.random()*options.length);
computerChoice = options[randomOption];
return computerChoice;
}
console.log(getComputerChoice ());

// compare the values the user entered and the computer chose and determine a winner assuming paper beats rock, 
//rock beats scissors, scissors beats paper if computer wins, display message "You Lost! "
if (userChoice == "rock" && computerChoice == "paper") {
    alert("You Lost!");
} else if (userChoice == "paper" && computerChoice == "scissors") {
    alert ("You Lost!");
} else if (userChoice == "scissors" && computerChoice == "rock"){
    alert ("You Lost!");
// if the computers choice and users choice are the same, display message "You tied"
} else if (userChoice == computerChoice) {
    alert("You Tied!");
} 
// if user wins, display message "You won!"
 else {
    alert ("You Won!");
}





