import axios from 'axios';
import { Dispatch } from 'redux';

import { Constants } from '../../constants';
import { ActionType, Action } from '../actionTypes/location';

export const searchLocations = (query: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SEARCH_LOCATION_PENDING });

  try {
    const data = await axios.get(`${Constants.BASE_URL}/forecaApi/location/search/${query}`, {
      withCredentials: true
    });

    dispatch({ type: ActionType.SEARCH_LOCATION_SUCCESS, payload: data.data.locations });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({ type: ActionType.SEARCH_LOCATION_FAIL, payload: err.message });
    }
  }
};

export const getLocationInfo = (query: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.GET_LOCATION_INFO_PENDING });

  try {
    const data = await axios.get(`${Constants.BASE_URL}/forecaApi/location/${query}`, {
      withCredentials: true
    });

    dispatch({ type: ActionType.GET_LOCATION_INFO_SUCCESS, payload: data.data });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({ type: ActionType.GET_LOCATION_INFO_FAIL, payload: err.message });
    }
  }
};

export const getLocationCurrWeather = (query: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.GET_LOCATION_CURRENT_WEATHER_PENDING });

  try {
    const data = await axios.get(
      `${Constants.BASE_URL}/forecaApi/current/${query}&tempunit=C&windunit=MS`,
      { withCredentials: true }
    );

    dispatch({ type: ActionType.GET_LOCATION_CURRENT_WEATHER_SUCCESS, payload: data.data.current });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({ type: ActionType.GET_LOCATION_CURRENT_WEATHER_FAIL, payload: err.message });
    }
  }
};

export const setLocationQuery = (query: string) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SET_LOCATION_QUERY, payload: query });
};
