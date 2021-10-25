import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import serverApi from './reducers/serverApiReducer';
import theme from './reducers/themeReducer';
import geoDetection from './reducers/geoDetectionReducer';
import currentLocation from './reducers/currentLocationReducer';
import selectedLocations from './reducers/selectedLocationsReducer';
import locationsSearch from './reducers/locationsSearchReducer';

import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  serverApi,
  theme,
  geoDetection,
  currentLocation,
  selectedLocations,
  locationsSearch
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
