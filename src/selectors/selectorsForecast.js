export const selectorGetLocationForecast = ({ locationManager }) => {
  const favoriteCities = locationManager.favoriteCitiesList;
  return favoriteCities.map(location => {
    const locationForecast = locationManager.forecasts[location.id];
    const dateObj = new Date();
    const currentTime = dateObj.getTime();
    location.forecast = null;

    if (locationForecast && currentTime <= locationForecast.cacheTimeStamp) {
      location.forecast = locationForecast.value;
    }
    return location;
  });
};
