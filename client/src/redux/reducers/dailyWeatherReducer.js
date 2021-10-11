import { SET_DAYS } from '../actions/dailyWeatherActions';

const initialState = {
  dailyWeather: []
};

export const dailyWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DAYS: {
      return { ...state, dailyWeather: [...action.payload] };
    }

    default: {
      return state;
    }
  }
};
