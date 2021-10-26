import { getAndSetAccessToken } from '../../api/weatherApi';
import { getWeatherAction } from './currentWeatherActions';
import { getLocationAction } from './locationAction';
import { getHourlyWeatherAction } from './hourlyWeatherAction';
import { getDailyWeatherAction } from './dailyWeatherActions';
import { getCurrentLocation } from '../../services/locationService';
import { setIsDataReceived } from './appStateActions';

export const initializeApp = async dispatch => {
  const currentLocation = await getCurrentLocation();
  const location = `${currentLocation.coords.latitude},${currentLocation.coords.longitude}`;

  await getAndSetAccessToken();
  Promise.all([
    dispatch(getLocationAction(currentLocation)),
    dispatch(getWeatherAction(location)),
    dispatch(getHourlyWeatherAction(location)),
    dispatch(getDailyWeatherAction(location))
  ]).then(dispatch(setIsDataReceived(true)));
};
