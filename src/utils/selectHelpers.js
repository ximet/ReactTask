import { getCurrentTime } from '../utils/dateTimeUtils';

export const selectCurrentForecast = (forecasts, locationId) => forecasts[locationId]?.forecast;

export const selectFavoriteLoadingState = (isLoadingStates, location) =>
  isLoadingStates[location?.id];
