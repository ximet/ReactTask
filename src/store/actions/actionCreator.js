import { ACTION_TYPES } from '../../constants';
import WeatherService from '../../services/weather.service';
import { TransformCityWeather } from '../../utils/transformer';


export const toggleButtonAction = (isMore) => ({
  type: ACTION_TYPES.TOGGLE_BUTTON,
  payload: isMore,
});

export const fetchWeatherByCityAction = (city) => (async (dispatch) => {
  try {
    const weather = await WeatherService.getCurrentWeatherByCity(city);
    dispatch({
      type: ACTION_TYPES.FEATCH_WEATHER_BY_CITY,
      payload: {
        [city]: TransformCityWeather(weather),
      },
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const setSelectedCityAction = (selectedCity) => ({
  type: ACTION_TYPES.SET_SELECTED_CITY,
  payload: selectedCity,
});
