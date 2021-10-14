import { getHourlyWeather } from '../../api/weatherApi';
export const SET_HOURS = 'SET_HOURS';

export const setHourlyWeatherAction = hourlyWeather => ({
  type: SET_HOURS,
  payload: {
    hourlyWeather
  }
});

export const getHourlyWeatherAction = location => dispatch => {
  getHourlyWeather(location).then(hourlyWeather =>
    dispatch(setHourlyWeatherAction(hourlyWeather.forecast))
  );
};
