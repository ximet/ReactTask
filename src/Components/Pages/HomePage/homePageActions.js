import { getCurrentWeather } from '../../../Api/weatherApi';
import { fetchUserGeoData } from '../../../Store/actions/geoActions';
import { getPosition } from '../../../Store/selectors/geoSelectors';

export const HOMEPAGE_ACTIONS = {
  USER_POSITION_WEATHER_REQUESTED: 'USER_POSITION_WEATHER_REQUESTED',
  USER_POSITION_WEATHER_RECEIVED: 'USER_POSITION_WEATHER_RECEIVED',
  USER_POSITION_WEATHER_FAILED: 'USER_POSITION_WEATHER_FAILED'
};

const userPositionWeatherRequested = () => ({
  type: HOMEPAGE_ACTIONS.USER_POSITION_WEATHER_REQUESTED
})

const userPositionWeatherReceived = ({ currentWeather }) => ({
  type: HOMEPAGE_ACTIONS.USER_POSITION_WEATHER_RECEIVED,
  payload: { currentWeather }
});

const userPositionWeatherFailed = ({ error }) => ({
  type: HOMEPAGE_ACTIONS.USER_POSITION_WEATHER_FAILED,
  payload: error
});

export const fetchUserLocationWeather = () => async (dispatch, getState) => {
  dispatch(userPositionWeatherRequested());

  try {
    await dispatch(fetchUserGeoData());
    const { longitude, latitude } = getPosition(getState());
    const currentWeather = await getCurrentWeather(longitude, latitude);
    dispatch(userPositionWeatherReceived({ currentWeather }));
  } catch (error) {
    dispatch(userPositionWeatherFailed(error));
  }
};
