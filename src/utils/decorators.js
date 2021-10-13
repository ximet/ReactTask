function delayDecorator(callback, delay) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export { delayDecorator };
