const StorageConnectionService = {
  getValue: key => {
    let result = null;
    try {
      let value = window.localStorage.getItem(key);
      value = JSON.parse(value);
      result = value;
    } catch (error) {
      console.error(error);
    }

    return result;
  },

  setValue: (key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(error);
    }
  }
};

export default StorageConnectionService;
