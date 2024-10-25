const randomNumber = Math.floor(Math.random()*100) + 1;
const guesses = 10;
let guess;

for (let i = 0; i < guesses; i++) {
    guess = window.prompt("Enter a guess from 1 to 100.");
    if (guess === null) {
        alert(`You quit the game. The number was ${randomNumber}`);
        break;
    } else if (guess === "" || guess < 1 || guess > 100) {
        i--;
        continue;
    }
    guess = parseInt(guess);
    if (guess !== randomNumber) {
        if(guess < randomNumber) {
            alert(`The guess was too low. You have ${guesses - i - 1} guesses left.`)
        } else {
            alert(`The guess was too high. You have ${guesses - i -1} guesses left.`)
        }
    } else {
        alert (`You guessed correctly! The number was ${randomNumber}`)
        break;
    }
}