export const getUserLocation = () => {
  const successCallback: PositionCallback = position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const userLocation = `${long.toString()},${lat.toString()}`;
    sessionStorage.setItem('userLocation', userLocation);
  };
  const errorCallback: PositionErrorCallback = error => {
    console.log(error);
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};
