import { combineReducers } from 'redux';

// Reducers
import authReducer from './auth';
import locationReducer from './location';
import globalReducer from './global';

const rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
  global: globalReducer
});

export default rootReducer;
