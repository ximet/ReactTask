import { SET_CURRENT_CITY, SET_RECENT_CITY, REMOVE_RECENT_CITY } from '../types/locationTypes';
import { getAllData } from './initAppActions';

export const setCurrentCity = data => ({
  type: SET_CURRENT_CITY,
  payload: { ...data }
});

export const setRecentCity = data => ({
  type: SET_RECENT_CITY,
  payload: { ...data }
});

export const changeLocation = data => dispatch => {
  dispatch(setRecentCity(data));
  dispatch(getAllData(data.id));
};
