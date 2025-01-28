function changeColor(theme) {
    document.body.classList.remove('pink2-theme', 'pink3-theme', 'pink1-theme');
    
    if (theme === 'pink2') {
        document.body.classList.add('pink2-theme');
    } else if (theme === 'pink3') {
        document.body.classList.add('pink3-theme');
    } else {
        document.body.classList.add('pink1-theme');
    }
}
