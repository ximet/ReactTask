import {
  SET_CURRENT_CITY,
  SET_RECENT_CITY,
  REMOVE_RECENT_CITY
} from '../types/locationTypes';

const INITIAL_STATE = {
  currentCity: {
    country: 'Belarus',
    id: 100625144,
    name: 'Minsk'
  },
  recentCities: [
    { id: 100625144, name: 'Minsk' },
    { id: 100625144, name: 'Minsk' }
  ]
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
