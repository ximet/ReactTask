import { getDailyWeather } from '../../api/weatherApi';
export const SET_DAYS = 'SET_DAYS';

export const setDailyWeatherAction = dailyWeather => ({
  type: SET_DAYS,
  payload: {
    dailyWeather
  }
});

export const getDailyWeatherAction = location => dispatch => {
  const params = {
    dataset: 'full',
    periods: 14
  };
  getDailyWeather(location, params).then(dailyWeather => {
    dispatch(setDailyWeatherAction(dailyWeather.forecast));
  });
};
