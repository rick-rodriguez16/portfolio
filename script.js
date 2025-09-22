const darkModeToggle = document.getElementById('darkModeToggle');
const toggleDescBtn = document.getElementById('toggleDescBtn');
const projectDesc = document.getElementById('desc1');

// Dark mode toggle with localStorage persistence
function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
}

darkModeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    setDarkMode(!isDark);
});

// On page load, apply saved dark mode preference
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
        setDarkMode(true);
    }
});

// Toggle project description visibility
toggleDescBtn.addEventListener('click', () => {
    if (projectDesc.style.display === 'none') {
        projectDesc.style.display = 'block';
        toggleDescBtn.textContent = 'Hide Description';
    } else {
        projectDesc.style.display = 'none';
        toggleDescBtn.textContent = 'Show Description';
    }
});
