import { getCurrentTime } from '../utils/dateTimeUtils';

export const selectCurrentForecast = (forecasts, locationId) => {
  return forecasts[locationId]?.forecast;
};
