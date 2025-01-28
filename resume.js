function changeColor(theme) {
    // Reset all theme classes
    document.body.classList.remove('pink2-theme', 'pink3-theme', 'pink1-theme');
    
    // Apply the selected theme class to the body
    if (theme === 'pink2') {
        document.body.classList.add('pink2-theme');
    } else if (theme === 'pink3') {
        document.body.classList.add('pink3-theme');
    } else {
        document.body.classList.add('pink1-theme');
    }
}
