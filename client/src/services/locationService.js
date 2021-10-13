const getCurrentLocation = async () => {
    return new Promise((resolve) => navigator.geolocation.getCurrentPosition( position => resolve(position)) )
}

export {
    getCurrentLocation
}