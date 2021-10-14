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
  API_FORECAST_DETAILED_PERIODS
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
  if (getState().serverApi.isTokenReceived && !getState().serverApi.isFetchingInProgress) {
    dispatch(setIsFetchingInProgress(true));

    try {
      const currentLocationInfo = weatherAPI.getLocationInfo(locationId);
      const currentLocationWeather = weatherAPI.getCurrentWeather(locationId);
      const currentLocationDailyWeather = weatherAPI.getForecast(
        API_FORECAST_DAILY_ENDPOINT,
        locationId
      );
      const currentLocationDetailedWeather = weatherAPI.getForecast(
        API_FORECAST_DETAILED_ENDPOINT,
        locationId,
        {
          periods: API_FORECAST_DETAILED_PERIODS
        }
      );

      const results = await Promise.all([
        currentLocationInfo,
        currentLocationWeather,
        currentLocationDailyWeather,
        currentLocationDetailedWeather
      ]);

      const [
        currentLocationInfoResult,
        currentLocationWeatherResult,
        currentLocationDailyWeatherResult,
        currentLocationDetailedWeatherResult
      ] = results;

      dispatch(setCurrentLocationInfo(currentLocationInfoResult));
      dispatch(setCurrentLocationWeather(currentLocationWeatherResult));
      dispatch(setCurrentLocationDailyWeather(currentLocationDailyWeatherResult));
      dispatch(setCurrentLocationDetailedWeather(currentLocationDetailedWeatherResult));
    } catch (error) {
      dispatch(setFetchingError(error));
      console.log(error);
    }

    dispatch(setIsFetchingInProgress(false));
  }
};

export const getCurrentLocationData = () => (dispatch, getState) => {
  const position = getState().geoDetection.position;
  const location = position
    ? `${position.coords.longitude},${position.coords.latitude}`
    : API_DEFAULT_ID;

  dispatch(getLocationDataById(location));
};
