import { CHANGE_APP_TITLE, AUTHENTICATE, GET_LOCAL_WEATHER, GET_SEARCHED_CITY, CURRENT_SAVED_CITY } from './types';
import authenticate from '../../api/authenticate';
import getLocalData from '../../api/api';
import getClientCoordinates from '../../services/getClientCoordinates';
import getSearchedCity from '../../api/getSearchedCity';
import getWeatherForCity from '../../api/getWeatherForCity';
export const changeAppTitle = () => {
  return {
    type: CHANGE_APP_TITLE
  };
};

export const authentication = () => async dispatch => {
  const result = await authenticate();
  dispatch({
    type: AUTHENTICATE,
    payload: result
  });
};

export const getLocalWeather = () => async dispatch => {
  const coordinates = await getClientCoordinates();
  let data = await getLocalData(coordinates);
  dispatch({
    type: GET_LOCAL_WEATHER,
    payload: data.data
  });
};

export const getSearchedCityData = city => async dispatch => {
  let cityResults = await getSearchedCity(city);
  dispatch({
    type: GET_SEARCHED_CITY,
    payload: cityResults.data
  });
};
export const getCurrentSavedCity = city => async dispatch => {
  let cityResults = await getWeatherForCity(city)
  dispatch({
    type: CURRENT_SAVED_CITY,
    payload: cityResults.data
  });
};
