const PREFIX = 'PRELOADER_MANAGER';

export const CURRENT_LOCATION_IS_LOADING = `${PREFIX}/CURRENT_LOCATION_IS_LOADING`;
export const DAILY_FORECAST_IS_LOADING = `${PREFIX}/DAILY_FORECAST_IS_LOADING`;
export const HOURLY_FORECAST_IS_LOADING = `${PREFIX}/HOURLY_FORECAST_IS_LOADING`;
export const FAVORITE_FORECAST_IS_LOADING = `${PREFIX}/FAVORITE_FORECAST_IS_LOADING`;

export const changeStateCurrrentLocation = isLoading => ({
  type: CURRENT_LOCATION_IS_LOADING,
  isLoading: isLoading
});

export const changeStateDailyForecast = isLoading => ({
  type: DAILY_FORECAST_IS_LOADING,
  isLoading: isLoading
});

export const changeStateHourlyForecast = isLoading => ({
  type: HOURLY_FORECAST_IS_LOADING,
  isLoading: isLoading
});

export const changeStateFavoriteForecast = (locationId, isLoading) => ({
  type: FAVORITE_FORECAST_IS_LOADING,
  isLoading: isLoading,
  locationId: locationId
});
