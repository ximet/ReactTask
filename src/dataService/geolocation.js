export async function getCurrentPosition() {
    const geolocation = await getCoordinates();
  
    return `${geolocation.coords.longitude}, ${geolocation.coords.latitude}`
}
  
function getCoordinates() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}