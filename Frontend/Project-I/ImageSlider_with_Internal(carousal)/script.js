const images = [
    'images1.jfif',
    'images2.jfif',
    'images3.jfif',
]; // Replace with your actual image paths

let currentIndex = 0;

const slideImage = document.getElementById('slideImage');

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the start
    slideImage.style.opacity = '0'; // Fade out

    setTimeout(() => {
        slideImage.src = images[currentIndex]; // Change the image
        slideImage.style.opacity = '1'; // Fade in
    }, 500); // Wait for fade out before changing the image
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
