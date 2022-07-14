const themeStorage = () => {
  const THEME_KEY = 'theme';

  const getTheme = () => {
    return localStorage.getItem(THEME_KEY);
  };
  const setTheme = item => {
    localStorage.setItem(THEME_KEY, item);
  };

  return { setTheme, getTheme };
};
export default themeStorage;
