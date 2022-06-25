export default function findMyLocation(fn) {
  const success = (position) => {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    fn({ long, lat });
  };

  const error = (error) => {
    console.error(error);
  };

  navigator.geolocation.getCurrentPosition(success, error);
}
