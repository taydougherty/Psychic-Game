// Set computer available choices
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Start all variables at 0 and set max guesses
var wins = 0;
var losses = 0;
var maxGuesses = 9;
var guessesLeft = 9;
var lettersUsed = [];

// Actions to update guesses left in HTML
function updateGuessesLeft() {
    document.getElementById("numGuessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};

// Actions to update the letters used in HTML
function updateLettersUsed() {
    document.getElementById("lettersGuessedAlready").innerHTML = "Your Guesses So Far: " + lettersUsed.concat(userChoice);
};

// Make computer choose random letter
var compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];

// Let user choose letters and keep playing until 9 chances
document.onkeyup = function(event) {
    var userChoice = event.key;

if (compChoice === userChoice) {
    wins++;
    guessesLeft--;
    lettersUsed.push(userChoice);
    updateGuessesLeft();
    updateLettersUsed();
    document.getElementById("numWins").innerHTML= "Wins: " + wins;

        if (guessesLeft > 0) {
            alert("You're doing great!");
            reset();
        }
        else if (guessesLeft === 0) {
            alert("Game over!");
            reset();
        }
    }
else {
    losses++;
    guessesLeft--;
    lettersUsed.push(userChoice);
    updateGuessesLeft();
    updateLettersUsed();
    document.getElementById("numLosses").innerHTML = "Losses: " + losses;

        if (guessesLeft > 0) {
            alert("Keep guessing!");
            reset();
        }
        else if (guessesLeft === 0) {
            alert("Game over!");
            reset();
        }
}
};

// Reset all actions to keep going
function reset() {
    maxGuesses = 9;
    guessesLeft = 9;
    lettersUsed = [];
};