import { SET_WEATHER } from '../actions/currentWeatherActions';

const initialState = {
  temperature: 0,
  time: '',
  windSpeed: 0,
  relHumidity: 0,
  feelsLikeTemp: 0,
  pressure: 0,
  symbolPhrase: ''
};

export const currentWeather = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return { ...action.payload.weather };
    }

    default: {
      return state;
    }
  }
};
