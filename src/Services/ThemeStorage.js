// db function
const themeStorage = () => {
  const DB_KEY = 'darkTheme';

  const getTheme = () => {
    return localStorage.getItem(DB_KEY);
  };
  const setTheme = item => {
    localStorage.setItem(DB_KEY, item);
  };

  return { setTheme, getTheme };
};
export default themeStorage;
