function delayDecorator(callback, dellay) {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, dellay);
  };
}

export { delayDecorator };
