import {
  SET_CURRENT_LOCATION_DAILY_WEATHER,
  SET_CURRENT_LOCATION_DETAILED_WEATHER,
  SET_CURRENT_LOCATION_INFO,
  SET_CURRENT_LOCATION_WEATHER
} from '../actionTypes';
import {
  API_DEFAULT_ID,
  API_FORECAST_DAILY_ENDPOINT,
  API_FORECAST_DETAILED_ENDPOINT,
  API_FORECAST_DETAILED_PERIODS,
  WEATHER_MIN_WAIT_INTERVAL
} from '../constants/constants';
import { weatherAPI } from '../services/dataService';
import { setFetchingError, setIsFetchingInProgress } from './ServerApiActions';

export const setCurrentLocationInfo = info => ({
  type: SET_CURRENT_LOCATION_INFO,
  payload: {
    info
  }
});

export const setCurrentLocationWeather = weather => ({
  type: SET_CURRENT_LOCATION_WEATHER,
  payload: {
    weather
  }
});

export const setCurrentLocationDailyWeather = dailyWeather => ({
  type: SET_CURRENT_LOCATION_DAILY_WEATHER,
  payload: {
    dailyWeather
  }
});

export const setCurrentLocationDetailedWeather = detailedWeather => ({
  type: SET_CURRENT_LOCATION_DETAILED_WEATHER,
  payload: {
    detailedWeather
  }
});

export const getLocationDataById = locationId => async (dispatch, getState) => {
  const state = getState();
  if (state.serverApi.isTokenReceived && !state.serverApi.isFetchingInProgress) {
    try {
      dispatch(setIsFetchingInProgress(true));

      const currentLocationInfoPromise = weatherAPI.getLocationInfo(locationId);
      const currentLocationWeatherPromise = weatherAPI.getCurrentWeather(locationId);
      const currentLocationDailyWeatherPromise = weatherAPI.getForecast(
        API_FORECAST_DAILY_ENDPOINT,
        locationId
      );
      const currentLocationDetailedWeatherPromise = weatherAPI.getForecast(
        API_FORECAST_DETAILED_ENDPOINT,
        locationId,
        {
          periods: API_FORECAST_DETAILED_PERIODS
        }
      );

      const [
        currentLocationInfo,
        currentLocationWeather,
        currentLocationDailyWeather,
        currentLocationDetailedWeather
      ] = await Promise.all([
        currentLocationInfoPromise,
        currentLocationWeatherPromise,
        currentLocationDailyWeatherPromise,
        currentLocationDetailedWeatherPromise
      ]);

      dispatch(setCurrentLocationInfo(currentLocationInfo));
      dispatch(setCurrentLocationWeather(currentLocationWeather));
      dispatch(setCurrentLocationDailyWeather(currentLocationDailyWeather));
      dispatch(setCurrentLocationDetailedWeather(currentLocationDetailedWeather));
    } catch (error) {
      dispatch(setFetchingError(error));
      console.log(error);
    } finally {
      dispatch(setIsFetchingInProgress(false));
    }
  } else {
    setTimeout(() => {
      dispatch(getLocationDataById(locationId));
    }, WEATHER_MIN_WAIT_INTERVAL);
  }
};

export const getCurrentLocationData = () => (dispatch, getState) => {
  const position = getState().geoDetection.position;
  const location = position
    ? `${position.coords.longitude},${position.coords.latitude}`
    : API_DEFAULT_ID;

  dispatch(getLocationDataById(location));
};
