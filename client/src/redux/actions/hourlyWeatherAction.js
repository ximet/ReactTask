import { getHourlyWeather } from '../../api/weatherApi';
export const SET_HOURS = 'SET_HOURS';

export const setHourlyWeatherAction = hourlyWeather => ({
  type: SET_HOURS,
  payload: {
    hourlyWeather
  }
});

export const getHourlyWeatherAction = id => dispatch => {
  getHourlyWeather(id).then(hourlyWeather =>
    dispatch(setHourlyWeatherAction(hourlyWeather.forecast))
  );
};
