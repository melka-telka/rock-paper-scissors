/*The user is prompted to pick one of three options - rock paper or scissors*/


/*The computer picks a random option*/

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let computerChose = getComputerChoice();

if (computerChose == 0) {
    console.log("Rock");
} else if (computerChose == 1) {
    console.log("Paper");
} else {
    console.log("Scissors");
}


/*If the combination is rock and paper, the player with paper wins*/
/*If the combination is rock and scissor, the player with rock wins*/
/*If the combination is paper and scissor, the player with scissor wins*/
/*If both the options are the same, the game will be a draw*/
/*The game lasts for 5 rounds, and after each round the score will be kept.*/
/*After the last round, a winner and a loser will be reported*/


