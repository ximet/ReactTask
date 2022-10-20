import { createStore, applyMiddleware } from 'redux';
import { feedbackReducer } from 'redux/feedbackReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const store = createStore(feedbackReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
