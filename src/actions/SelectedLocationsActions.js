import {
  PUT_SELECTED_LOCATION,
  DELETE_SELECTED_LOCATION,
  CLEAR_SELECTED_LOCATIONS
} from '../actionTypes';
import { weatherAPI } from '../services/dataService';
import { setIsFetchingInProgress } from './ServerApiActions';

export const putSelectedLocation = locationData => ({
  type: PUT_SELECTED_LOCATION,
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

export const updateAllSelectedLocationsData = () => async (dispatch, getState) => {
  const state = getState();
  if (state.serverApi.isTokenReceived && !state.serverApi.isFetchingInProgress) {
    try {
      dispatch(setIsFetchingInProgress(true));

      state.selectedLocations.forEach(async location => {
        const locationInfoPromise = weatherAPI.getLocationInfo(location.id);
        const locationWeatherPromise = weatherAPI.getCurrentWeather(location.id);

        const [locationInfo, locationWeather] = await Promise.all([
          locationInfoPromise,
          locationWeatherPromise
        ]);

        dispatch(
          putSelectedLocation({
            id: location.id,
            locationInfo,
            locationWeather
          })
        );
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsFetchingInProgress(false));
    }
  }
};
