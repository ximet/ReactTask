import { ACTION_TYPES } from '../../constants';

const fetchWeatherByCity = (state = {}, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FEATCH_WEATHER_BY_CITY:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export default fetchWeatherByCity;
