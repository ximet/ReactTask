import { createStore, applyMiddleware, combineReducers } from 'redux';
import { feedbackReducer } from 'redux/feedbackReducer';
import { searchReducer } from 'redux/searchReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  feedback: feedbackReducer,
  search: searchReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
