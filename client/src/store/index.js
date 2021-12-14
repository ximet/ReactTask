import { applyMiddleware, combineReducers, createStore } from 'redux';
import home from '../modules/Home/reducers/';
import feedback from '../modules/Feedback/reducers/';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  [home.name]: home.reducer,
  [feedback.name]: feedback.reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
