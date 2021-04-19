export const PREFIX = 'CURRENT_CITY_MANAGER/';

export const CURRENT_CITY_LOADING = `${PREFIX}CURRENT_CITY_LOADING`;
export const CURRENT_CITY_LOADED = `${PREFIX}CURRENT_CITY_LOADED`;
export const CURRENT_CITY_LOADING_FAILED = `${PREFIX}CURRENT_CITY_LOADING_FAILED`;
export const SET_CURRENT_CITY_NAME = `${PREFIX}SET_CURRENT_CITY_NAME`;

export const currentCityLoading = { type: CURRENT_CITY_LOADING };
export const currentCityLoaded = city => ({ type: CURRENT_CITY_LOADED, payload: city });
export const currentCityLoadingFailed = error => ({
  type: CURRENT_CITY_LOADING_FAILED,
  payload: error
});
export const setCurrentCityName = name => ({ type: SET_CURRENT_CITY_NAME, payload: name });

export function getCurrentCityData(id) {
  return async function (dispatch, getState, dataServices) {
    try {
      dispatch(currentCityLoading);
      const currentCityData = await dataServices.getCurrentCityData(id);
      dispatch(currentCityLoaded(currentCityData));
    } catch (error) {
      console.log(error);
      dispatch(currentCityLoadingFailed(error));
    }
  };
}
