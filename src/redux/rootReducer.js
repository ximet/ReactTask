import { combineReducers } from 'redux';
import { tokenReducer } from './reducers/tokenReducer';
import { locationReducer } from './reducers/locationReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  location: locationReducer
});

export default rootReducer;
