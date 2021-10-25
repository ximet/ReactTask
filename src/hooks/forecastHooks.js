import { useEffect } from 'react';
import { getCurrentTime } from '../utils/dateTimeUtils';
import { MAX_FORECAST_CACHE_TIME } from '../utils/constants';

export function useCacheForecast(forecasts, location, getForecast) {
  const currentLocationId = location?.id;

  useEffect(() => {
    if (currentLocationId) {
      const cachedForecast = forecasts[currentLocationId];
      let shouldUpdate = false;

      if (cachedForecast) {
        const currentTime = getCurrentTime();
        const cacheTimeStamp = cachedForecast.cacheTimeStamp;
        shouldUpdate = cacheTimeStamp + MAX_FORECAST_CACHE_TIME < currentTime;
      } else {
        shouldUpdate = true;
      }

      if (shouldUpdate) getForecast(currentLocationId);
    }
  }, [location]);
}
