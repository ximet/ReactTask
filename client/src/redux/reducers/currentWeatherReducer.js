import { SET_WEATHER } from '../actions/currentWeatherActions';

const initialState = {
  currentWeather: {
    temperature: 12,
    time: 0,
    windSpeed: 0,
    relHumidity: 0,
    feelsLikeTemp: 0,
    pressure: 0,
    symbolPhrase: ''
  }
};

export const currentWeather = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return { ...state, currentWeather: { ...action.payload.weather } };
    }

    default: {
      return state;
    }
  }
};
