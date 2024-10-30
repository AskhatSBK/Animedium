// Form Validation
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Age validation
    const age = document.getElementById('age');
    const ageError = document.getElementById('ageError');
    if (age.value < 18) {
        ageError.textContent = "You must be at least 18 years old";
        isValid = false;
    } else {
        ageError.textContent = "";
    }

    // If all fields are valid, submit form
    if (isValid) {
        form.submit();
    }
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
}
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Accordion Functionality
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');
    button.addEventListener('click', () => {
        // Toggle the active class on the clicked item
        item.classList.toggle('active');
        const content = item.querySelector('.accordion-collapse');

        // Toggle the collapse state
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            content.style.maxHeight = null; // Collapse
        } else {
            accordionItems.forEach(i => {
                const otherContent = i.querySelector('.accordion-collapse');
                otherContent.classList.remove('show');
                otherContent.style.maxHeight = null; // Collapse other items
                i.classList.remove('active');
            });
            content.classList.add('show');
            content.style.maxHeight = content.scrollHeight + 'px'; // Expand
        }
    });
});

// Subscribe Popup
const subscribeBtn = document.getElementById('subscribeBtn');
const popupForm = document.getElementById('popupForm');
const closePopup = popupForm.querySelector('.close');

subscribeBtn.addEventListener('click', () => {
    popupForm.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});


