import { getCurrentTime } from '../utils/dateTimeUtils';

export const selectLocationForecast = ({ locationManager }) => {
  const favoriteCities = locationManager.favoriteCitiesList;
  return favoriteCities.map(location => {
    const locationForecast = locationManager.forecasts[location.id];
    const currentTime = getCurrentTime();
    location.forecast = null;

    if (locationForecast && currentTime <= locationForecast.cacheTimeStamp) {
      location.forecast = locationForecast.forecast;
    }
    return location;
  });
};

export const selectCurrentForecast = (forecasts, locationId) => {
  return forecasts[locationId]?.forecast;
};
