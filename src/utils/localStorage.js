const setLocalstorageItem = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data));
};

export { setLocalstorageItem };
