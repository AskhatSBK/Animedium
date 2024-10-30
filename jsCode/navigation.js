document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    let currentIndex = 0;

    // Function to update the focus on the current link
    function updateFocus(index) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
        navLinks[index].focus();
    }

    // Keydown event for navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % navLinks.length; // Move right
            updateFocus(currentIndex);
            event.preventDefault();
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length; // Move left
            updateFocus(currentIndex);
            event.preventDefault();
        } else if (event.key === 'Enter') {
            navLinks[currentIndex].click(); // Activate the link
        }
    });

    // Initialize focus
    updateFocus(currentIndex);
});
