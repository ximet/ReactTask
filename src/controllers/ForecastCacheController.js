import { getCurrentTime } from '../utils/dateTimeUtils';
import { MAX_FORECAST_CACHE_TIME } from '../utils/constants';
import { getForecast } from '../actions/locationsManagerActions';

const ForecastCacheController = (locationId, forecasts) => {
  const cachedForecast = forecasts[locationId];
  let shouldUpdate = false;

  if (cachedForecast) {
    const currentTime = getCurrentTime();
    const cacheTimeStamp = cachedForecast.cacheTimeStamp;
    shouldUpdate = cacheTimeStamp + MAX_FORECAST_CACHE_TIME < currentTime;
  } else {
    shouldUpdate = true;
  }

  return shouldUpdate;
};

export default ForecastCacheController;
