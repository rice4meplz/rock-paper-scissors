'use strict'
const choices = ["rock" , "paper" , "scissors"];


function getComputerChoice (choices) {
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices].toLowerCase();
}




let playerChoice = function() {
    let promptChoice = prompt("Type in your hand!","");
    if (promptChoice === null || undefined) {
        return;
    } 
    promptChoice = promptChoice.toLowerCase();
    if (!choices.includes(promptChoice)) {
        alert("Invalid choice. Please make sure you are typing Rock, Paper, or Scissors correctly!");
        return playerChoice();
    } else { 
        alert(`You've chosen ${promptChoice}!`)
        return promptChoice;
    }

}


let score = 0;
let playerSelection;
let computerSelection;

function round () {
    
    playerSelection = playerChoice();
    if (playerSelection === undefined || null) return;
    computerSelection = getComputerChoice(choices);

    if (playerSelection === computerSelection) {
        alert("You chose the same hand, Draw!")
    } else if (
        playerSelection === "rock" && computerSelection === "scissors") {
            alert("Rock smashes scissors, bam!")
        score++;
    } else if (
        playerSelection === "scissors" && computerSelection === "paper") {
        alert("Snip snip snip for the win!")
        score++;
    } else if (
        playerSelection === "paper" && computerSelection === "rock") {
        alert("I'm not sure how a flimsy sheet of paper beats rock but hey!")
        score++;
    } else {
        alert("Oof, better luck next time!")
        score--;
    }
}

function game() {
    round();
    console.log(playerSelection); console.log(computerSelection); console.log(score);
    round();
    console.log(playerSelection); console.log(computerSelection); console.log(score);
    round();
    console.log(playerSelection); console.log(computerSelection); console.log(score);
    round();
    console.log(playerSelection); console.log(computerSelection); console.log(score);
    round();
    console.log(playerSelection); console.log(computerSelection); console.log(score);
    if (score > 0) {
    alert("Congratulations! You've won!") 
    } else if (
        score < 0 ) {
    alert("Oh no, seems you were no match for the computer!")   
    } else {
    alert("The two of you are evenly matched, Draw!")
    }
    score = 0
}

game()

// round();
// console.log(score); 
// console.log(playerSelection); 
// console.log(computerSelection);
