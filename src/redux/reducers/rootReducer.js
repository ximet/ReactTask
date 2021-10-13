import { combineReducers } from 'redux';

import locationReducer from '../reducers/locationReducer';
import themeReducer from '../reducers/themeReducer';
import weatherReducer from '../reducers/weatherReducer';

const rootReducer = combineReducers({ locationReducer, themeReducer, weatherReducer });

export default rootReducer;
