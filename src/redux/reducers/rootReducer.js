import { combineReducers } from 'redux';

import locationReducer from '../reducers/locationReducer';
import themeReducer from '../reducers/themeReducer';
import weatherReducer from '../reducers/weatherReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  theme: themeReducer,
  weather: weatherReducer
});

export default rootReducer;
