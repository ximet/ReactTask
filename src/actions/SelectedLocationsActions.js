import {
  DELETE_SELECTED_LOCATION,
  CLEAR_SELECTED_LOCATIONS,
  UPDATE_SELECTED_LOCATION,
  ADD_SELECTED_LOCATION
} from '../actionTypes';
import { WEATHER_MIN_WAIT_INTERVAL } from '../constants/constants';
import { weatherAPI } from '../services/dataService';
import { setIsFetchingInProgress } from './ServerApiActions';

export const addSelectedLocation = locationData => ({
  type: ADD_SELECTED_LOCATION,
  payload: locationData
});

export const updateSelectedLocation = locationData => ({
  type: UPDATE_SELECTED_LOCATION,
  payload: locationData
});

export const deleteSelectedLocation = id => ({
  type: DELETE_SELECTED_LOCATION,
  payload: {
    id
  }
});

export const clearSelectedLocations = () => ({
  type: CLEAR_SELECTED_LOCATIONS
});

export const putSelectedLocation = locationData => (dispatch, getState) => {
  const selectedLocations = getState().selectedLocations;

  if (selectedLocations.some(data => data.id === locationData.id)) {
    dispatch(updateSelectedLocation(locationData));
  } else {
    dispatch(addSelectedLocation(locationData));
  }
};

export const updateAllSelectedLocationsData = () => async (dispatch, getState) => {
  const state = getState();
  if (state.serverApi.isTokenReceived && !state.serverApi.isFetchingInProgress) {
    try {
      dispatch(setIsFetchingInProgress(true));

      const locationInfoPromises = state.selectedLocations.map(({ id }) =>
        weatherAPI.getLocationInfo(id)
      );
      const locationWeatherPromises = state.selectedLocations.map(({ id }) =>
        weatherAPI.getCurrentWeather(id)
      );

      const locationInfos = await Promise.all(locationInfoPromises);
      const weatherInfos = await Promise.all(locationWeatherPromises);

      locationInfos.forEach((item, index) => {
        dispatch(
          putSelectedLocation({
            id: String(item.id),
            locationInfo: item,
            locationWeather: weatherInfos[index]
          })
        );
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsFetchingInProgress(false));
    }
  } else {
    setTimeout(() => {
      dispatch(updateAllSelectedLocationsData());
    }, WEATHER_MIN_WAIT_INTERVAL);
  }
};
