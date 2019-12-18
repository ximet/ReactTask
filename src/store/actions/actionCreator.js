import { ACTION_TYPES } from '../../constants';
import WeatherService from '../../services/weather.service';


export const toggleButtonAction = (isMore) => ({
  type: ACTION_TYPES.TOGGLE_BUTTON,
  isMore,
});

// (dispatch, getState)
export const fetchWeatherByCity = (city) => (async (dispatch) => {
  try {
    const weather = await WeatherService.getCurrentWeatherByCity(city);
    dispatch({ type: ACTION_TYPES.FEATCH_WEATHER_BY_CITY, weather });
  } catch (error) {
    // console.error(error);
  }
});
