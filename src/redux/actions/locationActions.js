import { dataService } from '../../services/dataService';
import { SET_CURRENT_CITY, SET_RECENT_CITY, REMOVE_RECENT_CITY } from '../types/locationTypes';

const setCurrentCity = data => ({
  type: SET_CURRENT_CITY,
  payload: { ...data }
});

const setRecentCity = data => ({
  type: SET_RECENT_CITY,
  payload: { ...data }
});

export const addCurrentCity = cityId => async dispatch => {
  const cityInfo = await dataService.getCityInfo(cityId);

  dispatch(setCurrentCity(cityInfo));
  dispatch(setRecentCity(cityInfo));
};
