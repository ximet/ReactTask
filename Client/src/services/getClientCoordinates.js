export default async function getClientCoordinates() {
  try {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
      long: pos.coords.longitude,
      lat: pos.coords.latitude
    };
  } catch (err) {
    console.log(err);
  }
}
