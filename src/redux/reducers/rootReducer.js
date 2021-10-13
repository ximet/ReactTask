import { combineReducers } from 'redux';

import locationReducer from '../reducers/locationReducer';

const rootReducer = combineReducers({ locationReducer });

export default rootReducer;
