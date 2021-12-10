import { combineReducers, createStore } from 'redux';
import home from '../modules/Home/reducers/';
import feedback from '../modules/Feedback/reducers/';

const rootReducer = combineReducers({
  [home.name]: home.reducer,
  [feedback.name]: feedback.reducer
});

const store = createStore(rootReducer);

export default store;
