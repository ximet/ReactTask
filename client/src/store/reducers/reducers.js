import { combineReducers } from 'redux';

const initialCitySelectState = {
  selectedCity: []
};

const initialModeState = {
  darkThemeEnabled: false
};

const selectionReducer = (state = initialCitySelectState, action) => {
  switch (action.type) {
    case 'CITY_SELECT':
      return {
        ...state,
        selectedCity: [...state.selectedCity, ...action.value]
      };
  }
  return state;
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
