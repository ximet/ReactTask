// db function
const themeStorage = () => {
  const DB_KEY = 'darkTheme';

  const getFromLocalStorage = () => {
    return localStorage.getItem(DB_KEY);
  };
  const setToLocalStorage = item => {
    localStorage.setItem(DB_KEY, item);
  };

  return { setToLocalStorage, getFromLocalStorage };
};
export default themeStorage;
