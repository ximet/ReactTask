export const geoDetectionService = {
  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve(position);
        },
        error => {
          reject(error);
          console.log('Could not get geo position from browser', error);
        }
      );
    });
  }
};
