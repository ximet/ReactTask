import { applyMiddleware, combineReducers, createStore } from 'redux';
import feedback from '../modules/Feedback/reducers/';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  [feedback.name]: feedback.reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
