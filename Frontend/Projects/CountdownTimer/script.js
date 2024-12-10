document.getElementById('startButton').addEventListener('click', function() {
    const secondsInput = document.getElementById('secondsInput');
    let timeRemaining = parseInt(secondsInput.value);

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `Time: ${timeRemaining}s`;

    const intervalId = setInterval(() => {
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(intervalId);
            timerDisplay.textContent = 'Time is up!';
        } else {
            timerDisplay.textContent = `Time: ${timeRemaining}s`;
        }
    }, 1000);
});
