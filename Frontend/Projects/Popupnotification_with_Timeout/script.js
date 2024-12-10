document.getElementById('showNotificationButton').addEventListener('click', function() {
    const notification = document.getElementById('notification');
    
    // Show the notification
    notification.style.display = 'block';
    notification.style.opacity = '1';

    // Set a timeout to hide the notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0'; // Fade out effect
        // Hide the notification after fading out
        setTimeout(() => {
            notification.style.display = 'none';
        }, 500); // Wait for fade-out to complete
    }, 5000);
});
