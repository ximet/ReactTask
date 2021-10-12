const GeolocationService = {
  getCurrentPosition: function () {
    return new Promise((resolve, reject) => {
      const position = navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        () => reject()
      );
    });
  }
};

export default GeolocationService;
