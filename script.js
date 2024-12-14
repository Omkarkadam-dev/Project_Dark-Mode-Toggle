// Select the button and body element
const toggleButton = document.getElementById('toggleTheme');

const body = document.body;

// Check if dark mode preference is saved in local storage
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode');
}

// Event listener for the toggle button
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');

    
    // Save the current theme to local storage
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});
