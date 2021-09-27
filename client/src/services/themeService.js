const setThemeToLocalStorage = (newTheme) => {
    const theme = localStorage.getItem('theme') || '';
    localStorage.setItem('theme', newTheme);
}

const getThemeFromlocalStorage = () => {
    const theme = localStorage.getItem('theme') || '';
    return theme;
}

export {
    setThemeToLocalStorage,
    getThemeFromlocalStorage
}