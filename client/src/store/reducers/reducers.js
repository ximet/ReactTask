import { combineReducers } from 'redux';

const initialModeState = {
  darkThemeEnabled: false
};

const initStateCity = {
  citiesForecast: []
};

const selectForecast = (state = initStateCity, action) => {
  switch (action.type) {
    case 'CITY_SELECT':
      return {
        ...state,
        citiesForecast: [...state.citiesForecast, ...action.cities]
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

export default combineReducers({ selectForecast, darkModeToggle });
