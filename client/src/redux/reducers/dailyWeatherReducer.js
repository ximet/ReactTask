import { SET_DAYS } from '../actions/dailyWeatherActions';

const initialState = [];

export const dailyWeather = (state = initialState, action) => {
  switch (action.type) {
    case SET_DAYS: {
      return [...action.payload.dailyWeather];
    }

    default: {
      return state;
    }
  }
};
