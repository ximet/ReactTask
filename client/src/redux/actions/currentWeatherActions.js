export const SET_WEATHER = 'SET_WEATHER';
import { getCurrentWeather } from '../../api/weatherApi';

export const setCurrentWeatherAction = weather => ({
  type: SET_WEATHER,
  payload: {
    weather
  }
});

export const getWeatherAction = location => dispatch => {
  getCurrentWeather(location).then(weather => dispatch(setCurrentWeatherAction(weather.current)));
};
