const getLocalStorageItem = key => {
  return JSON.parse(localStorage.getItem(key));
};

export default getLocalStorageItem;
