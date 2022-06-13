import { combineReducers } from 'redux';

const initialModeState = {
  darkThemeEnabled: false
};

const initSavedCity = {
  savedCities: []
};

const savedCitiesReducer = (state = initSavedCity, action) => {
  switch (action.type) {
    case 'CITY_SAVE':
      return {
        ...state,
        savedCities: [...state.savedCities, action.payload]
      };
    case 'CITY_REMOVE':
      return {
        ...state,
        savedCities: state.savedCities.filter(
          reducerObject => reducerObject.selectedCity.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

const darkModeToggle = (state = initialModeState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkThemeEnabled: !state.darkThemeEnabled
      };
  }
  return state;
};

export default combineReducers({ darkModeToggle, savedCitiesReducer });
