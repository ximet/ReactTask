import { SET_HOURS } from '../actions/hourlyWeatherAction';

const initialState = [];

export const hourlyWeather = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOURS: {
      return [...action.payload.hourlyWeather];
    }

    default: {
      return state;
    }
  }
};
