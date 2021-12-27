import { applyMiddleware, combineReducers, createStore } from 'redux';
import feedback from '../modules/Feedback/reducers/';
import worldWeather from '../modules/WorldWeather/reducers/';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  [feedback.name]: feedback.reducer,
  [worldWeather.name]: worldWeather.reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
