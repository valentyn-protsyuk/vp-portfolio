const theme = () => {
    let themeToggleBtns = document.querySelectorAll('#theme-toggle');
    
    //state
    const curTheme = localStorage.getItem('theme');

    //on load
    curTheme && document.body.classList.add(curTheme);

    //handler
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        //memorize theme
        if(document.body.classList.contains('light-mode')){
            localStorage.setItem('theme', 'light-mode');
        }
        else{
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    };
    //toggle theme
    themeToggleBtns.forEach(btn =>
        btn.addEventListener('click', handleThemeToggle)
    );
};

export default theme;