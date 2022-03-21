import { combineReducers } from 'redux';
import { themeReducer, locationReducer } from './reducers';

export const rootReducer = combineReducers({
  theme: themeReducer,
  location: locationReducer
});
