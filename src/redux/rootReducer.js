import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  location: locationReducer,
});
