const PREFIX = 'PRELOADER_MANAGER';

export const CURRENT_LOCATION_IS_LOADING = `${PREFIX}/CURRENT_LOCATION_IS_LOADING`;
export const DAILY_FORECAST_IS_LOADING = `${PREFIX}/DAILY_FORECAST_IS_LOADING`;
export const HOURLY_FORECAST_IS_LOADING = `${PREFIX}/HOURLY_FORECAST_IS_LOADING`;
export const FAVORITE_FORECAST_IS_LOADING = `${PREFIX}/FAVORITE_FORECAST_IS_LOADING`;
export const SEARCH_IS_LOADING = `${PREFIX}/SEARCH_IS_LOADING`;

export const changeVisibleCurrentLocationPreloader = isLoading => ({
  type: CURRENT_LOCATION_IS_LOADING,
  isLoading: isLoading
});

export const changeVisibleDailyForecastPreloader = isLoading => ({
  type: DAILY_FORECAST_IS_LOADING,
  isLoading: isLoading
});

export const changeVisibleHourlyForecastPreloader = isLoading => ({
  type: HOURLY_FORECAST_IS_LOADING,
  isLoading: isLoading
});

export const changeVisibleSearchPreloader = isLoading => ({
  type: SEARCH_IS_LOADING,
  isLoading: isLoading
});

export const changeVisibleFavoriteForecastPreloader = (locationId, isLoading) => ({
  type: FAVORITE_FORECAST_IS_LOADING,
  isLoading: isLoading,
  locationId: locationId
});
