/*The user is prompted to pick one of three options - rock paper or scissors. Make it case insensitive*/

function getPlayerChoice() {
    let playerPrompt = prompt("Choose rock, paper or scissors");
    if (/^rock$/i.test(playerPrompt)) {
        return "Rock";
    } else if (/^paper$/i.test(playerPrompt)) {
        return "Paper";
    } else if (/^scissors$/i.test(playerPrompt)) {
        return "Scissors";
    }
}

/*The computer picks a random option*/

function getComputerChoice() {
    let pickRandom = Math.floor(Math.random() * 3);
        if (pickRandom == 0) {
            return "Rock";
        } else if (pickRandom == 1) {
            return "Paper";
        } else {
           return "Scissors";
        }
    }

/*The game plays a round*/

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++
        return "You lose! Paper beats rock!";     
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++
       return "You lose! Scissors beat paper!"  
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++
        return "You lose! Rock beats scissors!"    
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++
        return "You win! Rock beats scissors!"   
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++
        return "You win! Paper beats rock!"  
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++
        return "You win! Scissors beat paper!"   
    } else if (playerSelection == computerSelection) {
        return "It's a draw!";
    }
}


/*The game lasts for 5 rounds, and after each round the score will be kept.*/

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice()
        console.log("You: " + playerChoice)
        let computerChoice = getComputerChoice()
        console.log("Computer: " + computerChoice)
        console.log(playRound(playerChoice, computerChoice))
    }
    getWinner();
}

game();

 function getWinner() {
    let score = `Your score: ${playerScore}\nComputer score: ${computerScore}`;
    alert(score);
    if (playerScore > computerScore) {
        alert("Congratulations! You won!")
    } else if (computerScore > playerScore) {
        alert("You lost! :(")
    } else 
        alert("It's a draw! Play again")
 }
    



/*After the last round, a winner and a loser will be reported*/