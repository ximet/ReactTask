const PREFIX = 'PRELOADER_MANAGER';

export const CURRENT_LOCATION_IS_LOADING = `${PREFIX}/CURRENT_LOCATION_IS_LOADING`;

export const changeStateCurrrentLocation = isLoading => ({
  type: CURRENT_LOCATION_IS_LOADING,
  currentLocation: isLoading
});
