// Setting the wins and losses variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// Sets the computer choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Create the on click event that gets the user's pick
document.onkeyup = function(event) {

    // Determines which key was pressed. and then sets it to userGuess.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Not allowing user to make same letter selection
    if (guessesSoFar.indexOf(userGuess) === -1){

    // Records the users guess
    guessesSoFar.push(userGuess);

        // If the userGuess is the same as the computerGuess, user wins
        if (userGuess == computerGuess) {
            wins++;
            alert('You\'re a psychic!');
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }

        // If else, user loses and losses number goes up
        else if (guessesLeft == 0){
            losses++;
            alert('Sorry, try again!! :)');
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }
        // Subtracting the guesses left
            else if (userGuess !== computerGuess){
            guessesLeft--;
        } 
    }

    // Taking the tallies and displaying them in HTML
    var html = "<h2>Guess what letter I'm thinking of!</h2>" +
        "<p>Wins: " + wins + "</p>" +
        "<p> Losses: " + losses + "</p>" +
        "<p> Guesses Left: " + guessesLeft + "</p>" +
        "<p> Your Guesses so far: " + guessesSoFar + "</p>";

    // Set the inner HTML contents of the #game div to html
    document.querySelector("#game").innerHTML = html;
  ;

    // Logging to console
    console.log("Computer Guess: " + computerGuess);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses Left: " + guessesLeft);
    console.log("Your Guesses so far: " + guessesSoFar);
    console.log("\n");
}