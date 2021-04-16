import { currentURL } from '../../common/constants';
export const PREFIX = 'CURRENT_CITY_MANAGER/';

export const CURRENT_CITY_LOADING = `${PREFIX}CURRENT_CITY_LOADING`;
export const CURRENT_CITY_LOADED = `${PREFIX}CURRENT_CITY_LOADED`;
export const CURRENT_CITY_FAIL = `${PREFIX}CURRENT_CITY_FAIL`;
export const SET_CURRENT_CITY_NAME = `${PREFIX}SET_CURRENT_CITY_NAME`;

export function getCurrentCityData(id) {
  return async function (dispatch, getState, dataServices) {
    try {
      dispatch({ type: CURRENT_CITY_LOADING });
      const data = await dataServices.getData(`${currentURL}${id}`);
      dispatch({ type: CURRENT_CITY_LOADED, payload: data.current });
    } catch (error) {
      console.log(error);
      dispatch({ type: CURRENT_CITY_FAIL, payload: error });
    }
  };
}
