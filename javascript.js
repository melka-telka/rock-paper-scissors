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

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
       return "You lose! Scissors beat paper!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win! Scissors beat paper!";
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
    alert("This is the score");
}

    
game();

/*After the last round, a winner and a loser will be reported*/