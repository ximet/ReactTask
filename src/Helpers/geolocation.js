function findMyLocation() {
    const success = (position) => {
        console.log(position);
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
    };

    const error = (error) => {
        console.error(error);
    };

    navigator.geolocation(success, error);
}
