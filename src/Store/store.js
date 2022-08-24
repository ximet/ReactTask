import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import homePageReducer from '../Components/Pages/HomePage/homePageReducer';
import geoReducer from './reducers/geoReducer';

const rootReducer = combineReducers({
  homePage: homePageReducer,
  geoData: geoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
