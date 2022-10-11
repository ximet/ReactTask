import { combineReducers } from 'redux';

// Reducers
import authReducer from './auth';
import feedbackReducer from './feedback';
import locationReducer from './location';
import globalReducer from './global';

const rootReducer = combineReducers({
  auth: authReducer,
  feedback: feedbackReducer,
  location: locationReducer,
  global: globalReducer
});

export default rootReducer;
