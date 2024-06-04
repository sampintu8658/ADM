const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

window.addEventListener('scroll', function() {
    const scrollImage = document.querySelector('.scroll-image');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scaleValue = 1 + (scrollTop / 1000); // Adjust the divisor for more or less scaling effect

    scrollImage.style.transform = `scale(${scaleValue})`;
});



