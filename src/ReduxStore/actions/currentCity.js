export const PREFIX = 'CURRENT_CITY_MANAGER/';

export const CURRENT_CITY_LOADING = `${PREFIX}CURRENT_CITY_LOADING`;
export const CURRENT_CITY_LOADED = `${PREFIX}CURRENT_CITY_LOADED`;
export const CURRENT_CITY_FAIL = `${PREFIX}CURRENT_CITY_FAIL`;
export const SET_CURRENT_CITY_NAME = `${PREFIX}SET_CURRENT_CITY_NAME`;

export const currentCityLoading = { type: CURRENT_CITY_LOADING };
export const currentCityLoaded = city => ({ type: CURRENT_CITY_LOADED, payload: city });
export const currentCityFail = error => ({ type: CURRENT_CITY_FAIL, payload: error });
export const setCurrentCityName = name => ({ type: SET_CURRENT_CITY_NAME, payload: name });

export function getCurrentCityData(id) {
  return async function (dispatch, getState, dataServices) {
    try {
      dispatch(currentCityLoading);
      const currentCityData = await dataServices.getCurrentCityData(id);
      dispatch(currentCityLoaded(currentCityData));
    } catch (error) {
      console.log(error);
      dispatch(currentCityFail(error));
    }
  };
}
