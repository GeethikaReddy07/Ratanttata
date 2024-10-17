function showInfo(event, description) {
    const infoBox = document.getElementById('info');
    infoBox.style.display = 'block'; // Show the info box
    infoBox.textContent = description; // Set the description text

    const clickedImage = event.target;

    // Check if the clicked image is already rotated
    if (clickedImage.classList.contains('rotated')) {
        clickedImage.classList.remove('rotated'); // Reset rotation
    } else {
        // Reset all other images
        const images = document.querySelectorAll('.gallery img');
        images.forEach(img => img.classList.remove('rotated')); // Reset other images
        clickedImage.classList.add('rotated'); // Rotate the clicked image
    }
}
