import { combineReducers } from 'redux';
import { SET_THEME, SET_TOKEN } from './types';

function themeReducer(state = '', action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;

    default: return state;
  }
}

function tokenReducer(state = '', action) {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;

    default: return state;
  }
}

const rootReducer = combineReducers({
  theme: themeReducer,
  token: tokenReducer,
});

export default rootReducer;
