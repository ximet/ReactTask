const GeolocationService = {
  getCurrentPosition: function () {
    return new Promise((resolve, reject) => {
      const position = navigator.geolocation.getCurrentPosition(
        position => this.getPositionSuccess(position, resolve),
        () => this.getPositionError(reject)
      );
    });
  },

  getPositionSuccess: (position, resolve) => {
    resolve(position);
  },

  getPositionError: reject => {
    reject();
  }
};

export default GeolocationService;
