function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function closePopupOnClickOutside(event) {
    if (event.target === document.getElementById("popup")) {
        closePopup();
    }
}

const subscribeBtn = document.getElementById('subscribeBtn');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.getElementsByClassName('close')[0];

subscribeBtn.onclick = function() {
    popupForm.style.display = "block";
}

closeBtn.onclick = function() {
    popupForm.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = "none";
    }
}

const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = star.dataset.rating;
    // Remove 'selected' class from all stars
    stars.forEach(s => s.classList.remove('selected'));
    // Add 'selected' class to the clicked star and all stars before it
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('selected');
    }
  });
});

