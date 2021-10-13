import { combineReducers } from 'redux';

import locationReducer from '../reducers/locationReducer';
import themeReducer from '../reducers/themeReducer';

const rootReducer = combineReducers({ locationReducer, themeReducer });

export default rootReducer;
