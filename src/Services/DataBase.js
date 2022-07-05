// db function
const time = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));
function DataBase() {
  const DB_KEY = 'react_db';

  const tryThrowError = () => {
    if (new Date().getSeconds() % 10 < 3) {
      throw new Error('Bad request');
    }
  };

  const getFromLocalStorage = async () => {
    await time(3);
    // tryThrowError();
    return Promise.resolve(JSON.parse(localStorage.getItem(DB_KEY) || '[]'));
  };
  const setToLocalStorage = async item => {
    await time(2);
    // tryThrowError();
    localStorage.setItem(DB_KEY, JSON.stringify(item));
  };

  return { setToLocalStorage, getFromLocalStorage };
}
export default DataBase;
