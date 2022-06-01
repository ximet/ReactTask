import { combineReducers } from 'redux';

const initialModeState = {
  darkThemeEnabled: false
};

const selectionReducer = (action, cities, selectedCity) => {
  console.log(action, cities, selectedCity)
  switch (action) {
    case 'CITY_SELECT':
      return {
        cities,
        selectedCity
      };
      default:
        return {
          cities: [],
          selectedCity:[]
        }
  }
};

const darkModeReducer = (state = initialModeState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkThemeEnabled: !state.darkThemeEnabled
      };
  }
  return state;
};

export default combineReducers({ selectionReducer, darkModeReducer });
