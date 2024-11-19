const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('rating-display');

function getRatingDescription(rating) {
    switch (rating) {
        case "1": return "Very Bad";
        case "2": return "Bad";
        case "3": return "Middle";
        case "4": return "Good";
        case "5": return "Amazing";
        default: return "";
    }
}

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.dataset.rating;
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
        ratingDisplay.textContent = `You choose: ${rating} stars (${getRatingDescription(rating)}).`;
    });
});
