import { ACTION_TYPES } from '../../constants';

const fetchWeatherByCity = (state = {}, { type, city }) => {
  switch (type) {
    case ACTION_TYPES.FEATCH_WEATHER_BY_CITY:
      return {
        ...state, ...{ city },
      };
    default:
      return state;
  }
};

export default fetchWeatherByCity;
