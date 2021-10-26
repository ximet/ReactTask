const getCurrentLocation = async () => {
  return new Promise(resolve => {
    const position = navigator.geolocation.getCurrentPosition(position => resolve(position))
  }
  );
};

export { getCurrentLocation };
