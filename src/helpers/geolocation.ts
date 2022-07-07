export const getUserLocation = (): void => {
  const successCallback: PositionCallback = position => {
    const lat: number = position.coords.latitude;
    const long: number = position.coords.longitude;
    const userLocation: string = `${long.toString()},${lat.toString()}`;
    sessionStorage.setItem('userLocation', userLocation);
  };
  const errorCallback: PositionErrorCallback = error => {
    console.log(error);
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};
