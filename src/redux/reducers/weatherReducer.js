import { SET_CURRENT_CITY_WEATHER, SET_CITIES_WEATHER } from '../actions/weatherActions';

const initialState = {
  currentCity: {
    name: null,
    temp: null,
    weatherIcon: null,
  },
  cities: [],
};

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_CITY_WEATHER:
      return {
        ...state,
        currentCity: payload,
      };
    case SET_CITIES_WEATHER:
      return {
        ...state,
        cities: payload,
      };
    
    default:
      return state;
  }
};

export default weatherReducer;
