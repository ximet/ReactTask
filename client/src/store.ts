import { createStore, applyMiddleware, combineReducers, ReducersMapObject, AnyAction } from 'redux';
import { feedbackReducer } from 'redux/feedbackReducer';
import { searchReducer } from 'redux/searchReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { CombinedState } from 'types';

const reducers = combineReducers({
  feedback: feedbackReducer,
  search: searchReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
