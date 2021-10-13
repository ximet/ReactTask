import { SET_HOURS } from '../actions/hourlyWeatherAction';

const initialState = {
  hourlyWeather: []
};

export const hourlyWeather = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOURS: {
      return { ...state, hourlyWeather: [...action.payload.hourlyWeather] };
    }

    default: {
      return state;
    }
  }
};
