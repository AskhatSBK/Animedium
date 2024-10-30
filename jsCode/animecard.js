const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('rating-display');

function getRatingDescription(rating) {
    switch (rating) {
        case "1": return "Ужасно";
        case "2": return "Плохо";
        case "3": return "Средне";
        case "4": return "Хорошо";
        case "5": return "Отлично";
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
        ratingDisplay.textContent = `Вы выбрали рейтинг: ${rating} звезд (${getRatingDescription(rating)}).`;
    });
});
