//Create a function called getComputerChoice that randomly returns either Paper, Rock, Scissors.
const choices = [`rock`, `scissors`, `paper`];

function getComputerChoice() {

    const random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

/*Create a function that plays a single round of Rock Paper Scissors. This function takes two
parameters - the "playerSelection" and the "computerSelection", and then return a string that
declares the winner of that round
*/
function playRound(playerSelection, computerSelection) {

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection === `rock` && computerSelection === `scissors`)
        || (playerSelection === `scissors` && computerSelection === `paper`)
        || (playerSelection === `paper` && computerSelection === `rock`)) {

        return `Player wins! ${capitalizeFirst(playerSelection)} beats ${capitalizeFirst(computerSelection)}`;

    } else if (playerSelection === computerSelection) {

        return `Tie Game!`;

    } else {

        return `Player loses! ${capitalizeFirst(computerSelection)} beats ${capitalizeFirst(playerSelection)}`;
    }
}

// Make a function to capitalize the first letter of every return option from playRound.
function capitalizeFirst(word) {

    const first = word[0].toUpperCase();
    return first + word.slice(1);
}

//Create a function called game()
function game() {

    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt(`Select Rock, Paper, Scissors`).toLowerCase();
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

console.log(game());

