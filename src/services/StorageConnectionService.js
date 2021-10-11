const StorageConnectionService = {
  getValue: key => {
    const result = {
      status: false
    };
    try {
      let value = window.localStorage.getItem(key);
      value = JSON.parse(value);
      result.status = true;
      result.value = value;
    } catch (error) {
      console.error(error);
    }

    return result;
  },

  setValue: (key, value) => {
    const result = {
      status: false
    };
    try {
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(key, serializedValue);
      result.status = true;
    } catch (error) {
      console.error(error);
    }

    return result;
  }
};

export default StorageConnectionService;
