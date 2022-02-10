const setLocalstorageItem = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data));
};

const getLocalstorageItem = (keyName) => {
  const item = localStorage.getItem(keyName);

  return item ? JSON.parse(item) : null;
};

export { setLocalstorageItem, getLocalstorageItem };
