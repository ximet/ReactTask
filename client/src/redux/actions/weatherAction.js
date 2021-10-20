import { getWeatherAction } from './currentWeatherActions';
import { getHourlyWeatherAction } from './hourlyWeatherAction';
import { getDailyWeatherAction } from './dailyWeatherActions';

export const setWeatherAction = (dispatch, location) => {
  console.log(location);
  const searchQuery = location.id;
  dispatch(getWeatherAction(searchQuery));
  dispatch(getHourlyWeatherAction(searchQuery));
  dispatch(getDailyWeatherAction(searchQuery));
};
