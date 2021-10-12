import { SET_WEATHER } from '../actions/currentWeatherActions';

const initialState = {
  currentWeather: {
    temperature: 12,
    time: '14:25',
    weekDay: 'monday',
    month: 'October',
    date: 11,
    year: 2021,
    windSpeed: 1,
    humidity: 50,
    feelsLike: 10,
    pressure: 1000,
    weatherConditions: 'partly cloudy'
  }
};

export const currentWeather = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return { ...state, currentWeather: { ...action.payload } };
    }

    default: {
      return state;
    }
  }
};
