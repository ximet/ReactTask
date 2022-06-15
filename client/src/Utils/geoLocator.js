export default function getLocation(onSuccess) {
  const successCallback = position => {
    onSuccess({ lon: position.coords.longitude, lat: position.coords.latitude });
  };

  const errorCallback = error => {
    console.error(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}
