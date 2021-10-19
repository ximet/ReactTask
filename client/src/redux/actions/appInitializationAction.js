import { getAndSetAccessToken } from '../../api/weatherApi';
import { getWeatherAction } from './currentWeatherActions';
import { getLocationAction } from './locationAction';
import { getHourlyWeatherAction } from './hourlyWeatherAction';
import { getDailyWeatherAction } from './dailyWeatherActions';
import { getCurrentLocation } from '../../services/locationService';

export const initializeApp = async dispatch => {
  const currentLocation = await getCurrentLocation();
  const location = `${currentLocation.coords.latitude},${currentLocation.coords.longitude}`;

  await getAndSetAccessToken();
  await dispatch(getLocationAction(currentLocation));
  await dispatch(getWeatherAction(location));
  await dispatch(getHourlyWeatherAction(location));
  await dispatch(getDailyWeatherAction(location));
};
