// Set computer available choices
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Start all variables at 0 and set max guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersUsed = [];

// Actions to update guesses left in HTML
function updateGuessesLeft() {
    document.getElementById("numGuessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};

// Actions to update the letters used in HTML
function updateLettersUsed() {
    document.getElementById("lettersGuessedAlready").innerHTML = "Your Guesses So Far: " + lettersUsed;
};

// Make computer choose random letter
var compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];

// Let user choose letters and keep playing until 9 chances
document.onkeyup = function(event) {
    var userChoice = event.key;

// If the user chooses the same letter that the computer chose then reset all counters and add +1 to wins
if (compChoice === userChoice) {
    wins++;
    document.getElementById("numWins").innerHTML= "Wins: " + wins;
    reset();
    }

// If the user doesn't guess the same letter as the computer keep counting turns until reach 0 guesses left or win
    else {
    guessesLeft--;
    lettersUsed.push(userChoice);
    updateGuessesLeft();
    updateLettersUsed();

        if (guessesLeft === 0) {
            losses++;
            document.getElementById("numLosses").innerHTML = "Losses: " + losses;
            reset();
        }
}
};

// Reset all actions to keep going
function reset() {
    guessesLeft = 9;
    lettersUsed = [];
};