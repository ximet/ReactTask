import { SET_CURRENT_CITY, SET_RECENT_CITY, REMOVE_RECENT_CITY } from '../types/locationTypes';
import { addRecentCity, removeRecentCity } from '../../utils/changeLocationData';
import { DEFAULT_RECENT_CITIES, DEFAULT_CURRENT_CITY } from '../../constants/forecaApi';

const INITIAL_STATE = {
  currentCity: DEFAULT_CURRENT_CITY,
  recentCities: DEFAULT_RECENT_CITIES
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload
      };

    case SET_RECENT_CITY:
      return {
        ...state,
        recentCities: addRecentCity(state.recentCities, action.payload)
      };

    case REMOVE_RECENT_CITY:
      return {
        ...state,
        recentCities: removeRecentCity(state.recentCities, action.payload)
      };

    default:
      return state;
  }
};

export default locationReducer;
