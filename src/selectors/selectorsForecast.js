import { getCurrentTime } from '../utils/dateTimeUtils';

export const selectCurrentForecast = (forecasts, locationId) => {
  const forecast = forecasts[locationId]?.forecast;
  return forecast ? forecast : {};
};
