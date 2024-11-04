function getRandom(min, max) {
	return Math.ceil(Math.random() * (max - min) + min);
}

let mysteryNum = getRandom(1, 100);
let guessesMade = 0;
let maxGuesses = 5;

document.getElementById('btn-guess').addEventListener('click', () => {
	let userGuess = parseInt(document.getElementById('feed').value, 10);
	let output = document.getElementById('output');

	if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
		output.textContent = 'Enter only numbers between 1 and 100!';
		return;
	}

	guessesMade++;
	let guessesLeft = maxGuesses - guessesMade;

	if (userGuess === mysteryNum) {
		output.textContent = `Great! You won the game in ${guessesMade} ${guessesMade > 1 ? 'guesses' : 'guess'}.`;
		document.getElementById('feed').disabled = true;
		document.getElementById('btn-guess').disabled = true;
	} else if (guessesLeft > 0) {
		output.textContent = userGuess > mysteryNum
			? `Your guess is too high! ${guessesLeft} guess${guessesLeft > 1 ? 'es' : ''} left.`
			: `Your guess is too low! ${guessesLeft} guess${guessesLeft > 1 ? 'es' : ''} left.`;
	} else {
		output.textContent = `No more guesses left. The number was ${mysteryNum}.`;
		document.getElementById('feed').disabled = true;
		document.getElementById('btn-guess').disabled = true;
	}
});
