import { SET_DAYS } from '../actions/dailyWeatherActions';

const initialState = {
  dailyWeather: []
};

export const dailyWeather = (state = initialState, action) => {
  switch (action.type) {
    case SET_DAYS: {
      return { ...state, dailyWeather: [...action.payload.dailyWeather] };
    }

    default: {
      return state;
    }
  }
};
