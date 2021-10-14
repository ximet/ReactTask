import { getLocationInfo } from '../../api/weatherApi';
export const SET_LOCATION = 'SET_LOCATION';

export const getLocationAction = location => dispatch => {
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;

  getLocationInfo(latitude, longitude).then(location => dispatch(setLocationAction(location)));
};

export const setLocationAction = location => ({
  type: SET_LOCATION,
  payload: {
    location
  }
});
