function toggleTheme() {
    const body = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.setAttribute('data-theme', 'dark');
        
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}