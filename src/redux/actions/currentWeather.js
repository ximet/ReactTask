import { areRequestsCanceled } from '../../common/axios-config';
import { ERRORS } from '../../common/constants';

const PREFIX = 'CURRENT_WEATHER/';

export const SET_CURRENT_WEATHER_REQUEST_STARTED = `${PREFIX}SET_CURRENT_WEATHER_REQUEST_STARTED`;
export const SET_CURRENT_WEATHER_REQUEST_SUCCEEDED = `${PREFIX}SET_CURRENT_WEATHER_REQUEST_SUCCEEDED`;
export const SET_CURRENT_WEATHER_REQUEST_FAILED = `${PREFIX}SET_CURRENT_WEATHER_REQUEST_FAILED`;
export const SET_CURRENT_WEATHER_REQUEST_FINISHED = `${PREFIX}SET_CURRENT_WEATHER_REQUEST_FINISHED`;

const setCurrentWeatherRequestStarted = { type: SET_CURRENT_WEATHER_REQUEST_STARTED };
const setCurrentWeatherRequestSucceeded = locations => ({
  type: SET_CURRENT_WEATHER_REQUEST_SUCCEEDED,
  payload: locations
});
const setCurrentWeatherRequestFailed = error => ({
  type: SET_CURRENT_WEATHER_REQUEST_FAILED,
  payload: error
});
const setCurrentWeatherRequestFinished = { type: SET_CURRENT_WEATHER_REQUEST_FINISHED };

export const getCurrentWeatherData = cityId => async (dispatch, _, DataService) => {
  try {
    dispatch(setCurrentWeatherRequestStarted);

    const current = await DataService.getCurrentWeatherData(cityId);
    dispatch(setCurrentWeatherRequestSucceeded(current));
  } catch (error) {
    dispatch(setCurrentWeatherRequestFailed(error));

    if (!areRequestsCanceled(error)) {
      alert(ERRORS.DEFAULT.message);
    }
  } finally {
    dispatch(setCurrentWeatherRequestFinished);
  }
};
