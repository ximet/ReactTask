function getCurrentLocation() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}

export const locationService = {
  getCurrentLocation: async function () {
    try {
      const { coords } = await getCurrentLocation();
      const { latitude, longitude } = coords;

      return `${longitude}, ${latitude}`;
    } catch (error) {
      console.error(error.message);
    }
  }
};
