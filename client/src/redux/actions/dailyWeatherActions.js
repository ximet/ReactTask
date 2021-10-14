import { getDailyWeather } from '../../api/weatherApi';
export const SET_DAYS = 'SET_DAYS';

export const setDailyWeatherAction = dailyWeather => ({
  type: SET_DAYS,
  payload: {
    dailyWeather
  }
});

export const getDailyWeatherAction = location => dispatch => {
  getDailyWeather(location).then(dailyWeather => {
    dispatch(setDailyWeatherAction(dailyWeather.forecast));
  });
};
