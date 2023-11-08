const minNumber = 1;
const maxNumber = 100;
let targetNumber;
let isGameActive = true;

// Function to generate a random moving number
function generateRandomNumber() {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

// Function to update the moving number
function updateNumber() {
    document.getElementById('number-container').textContent = generateRandomNumber();
    if (isGameActive) {
        setTimeout(updateNumber, 100);
    }
}

// Function to start the game
function startGame() {
    targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    isGameActive = true;
    updateNumber();
    document.getElementById('submit-button').addEventListener('click', checkGuess);
    document.getElementById('restart-button').style.display = 'none';
}

// Function to check the user's guess
function checkGuess() {
    if (!isGameActive) {
        return;
    }

    const userInput = parseInt(document.getElementById('user-input').value);
    if (isNaN(userInput)) {
        document.getElementById('message').textContent = 'Please enter a valid number.';
    } else {
        if (userInput === targetNumber) {
            document.getElementById('message').textContent = 'Congratulations! You guessed the correct number!';
            isGameActive = false;
            document.getElementById('restart-button').style.display = 'block';
        } else if (userInput < targetNumber) {
            document.getElementById('message').textContent = 'Try a higher number.';
        } else {
            document.getElementById('message').textContent = 'Try a lower number.';
        }
    }
}

// Function to restart the game
function restartGame() {
    document.getElementById('user-input').value = '';
    document.getElementById('message').textContent = '';
    startGame();
}

// Initialize the game
startGame();
document.getElementById('restart-button').addEventListener('click', restartGame);