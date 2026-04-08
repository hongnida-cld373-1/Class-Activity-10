const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        toggleBtn.textContent = '🌙';
    }
}

// Load preference
let currentTheme = localStorage.getItem('theme') || 'light';
applyTheme(currentTheme);

toggleBtn.addEventListener('click', () => {
    currentTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
});