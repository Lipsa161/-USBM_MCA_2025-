let intervalId;

document.getElementById('startBlinkButton').addEventListener('click', function() {
    const blinkingText = document.getElementById('blinkingText');

    // Clear any existing intervals to avoid multiple timers
    clearInterval(intervalId);

    intervalId = setInterval(() => {
        blinkingText.style.opacity = 
            blinkingText.style.opacity === '0' ? '1' : '0';
    }, 1000);
});

document.getElementById('stopBlinkButton').addEventListener('click', function() {
    clearInterval(intervalId);
    document.getElementById('blinkingText').style.opacity = '1'; // Ensure text is visible
});
