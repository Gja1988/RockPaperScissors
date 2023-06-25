let playScore = 0;
let compScore = 0;
let winningScore = 0;
let roundNum = 0;
const compChoices = [`rock`, `scissors`, `paper`];

// Names of buttons to add to event listeners
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

// Reset button to restart game
const reset = document.querySelector('.reset');

// Spans to display total score for both player and computer
const playerDisplay = document.querySelector('#playerScore');
const compDisplay = document.querySelector('#compScore');
const winner = document.querySelector('.header');

// Results to display on the screen after each game
let results = document.querySelector('.results');

// Listener for player selecting rock as their choice. Also creates a list for previous games. 
rock.addEventListener('click', () => {

    let result = `${playRound('rock', getComputerChoice())}`;
    const listGames = document.createElement('li');
    listGames.textContent = result;
    results.appendChild(listGames);
    scoreTracker();
    declareWinner();
})

// Listener for player selecting paper as their choice. Also creates a list for previous games. 
paper.addEventListener('click', () => {

    let result = `${playRound('paper', getComputerChoice())}`;
    const listGames = document.createElement('li');
    listGames.textContent = result;
    results.appendChild(listGames);
    scoreTracker();
    declareWinner();
})

// Listener for player selecting scissors as their choice. Also creates a list for previous games. 
scissors.addEventListener('click', () => {

    let result = `${playRound('scissors', getComputerChoice())}`;
    const listGames = document.createElement('li');
    listGames.textContent = result;
    results.appendChild(listGames);
    scoreTracker();
    declareWinner();
})

// Function to reset the game
const resetGame = () => {
    results.innerHTML = '';
    isGameover = false;
    playScore = 0;
    compScore = 0;
    roundNum = 0;
    compDisplay.textContent = `Computer score: ${compScore}`;
    playerDisplay.textContent = `Player score: ${playScore}`;
    enableButtons();
    winner.textContent = `G's Paper, Rock, Scissors Game`;
}

const disableButtons = () => {
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
}

const enableButtons = () => {
    rock.disabled = false;
    scissors.disabled = false;
    paper.disabled = false;
}

const scoreTracker = () => {
    if (playScore >= 5 || compScore >= 5) {
        disableButtons();
    }
}

const declareWinner = () => {
    if (playScore >= 5) {
        winner.textContent = `Player wins! Total rounds played: ${roundNum}`;
    }

    if (compScore >= 5) {
        winner.textContent = `Computer wins! Total rounds played: ${roundNum}`
    }
}


// Event listener to restart the total scores and start from 0 - 0
reset.addEventListener('click', resetGame);

// Function for computer to make a random selection
function getComputerChoice() {

    const random = Math.floor(Math.random() * compChoices.length);

    return compChoices[random];
}

// Function to play a round of RPS. 
function playRound(playerSelection, computerSelection) {

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection === `rock` && computerSelection === `scissors`)
        || (playerSelection === `scissors` && computerSelection === `paper`)
        || (playerSelection === `paper` && computerSelection === `rock`)) {

        playScore += 1;
        roundNum++;
        playerDisplay.textContent = `Player score: ${playScore}`;

        return `Round: ${roundNum} - Player wins! ${capitalizeFirst(playerSelection)} beats ${capitalizeFirst(computerSelection)} - Score so far - Player: ${playScore}, Computer: ${compScore}`;

    } else if (playerSelection === computerSelection) {

        roundNum++;
        return `Round: ${roundNum} - Tie Game! - Score so far - Player: ${playScore}, Computer: ${compScore}`;

    } else {

        roundNum++;
        compScore += 1;
        compDisplay.textContent = `Computer score: ${compScore}`;

        return `Round: ${roundNum} - Player loses! ${capitalizeFirst(computerSelection)} beats ${capitalizeFirst(playerSelection)}- Score so far - Player: ${playScore}, Computer: ${compScore}`;
    }
}

// Make a function to capitalize the first letter of every return option from playRound.
function capitalizeFirst(word) {

    const first = word[0].toUpperCase();
    return first + word.slice(1);
}




