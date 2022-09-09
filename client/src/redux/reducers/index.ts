import { combineReducers } from 'redux';

// Reducers
import authReducer from './auth';
import locationReducer from './location';
import themeReducer from './theme';

const rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
  theme: themeReducer
});

export default rootReducer;
