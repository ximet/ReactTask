import { combineReducers, Reducer, CombinedState, AnyAction } from 'redux';

// Types
import type { AuthState } from './auth';
import type { FeedbackState } from './feedback';
import type { LocationState } from './location';
import type { GlobalState } from './global';

// Reducers
import authReducer from './auth';
import feedbackReducer from './feedback';
import locationReducer from './location';
import globalReducer from './global';

const rootReducer: Reducer<
  CombinedState<{
    auth: AuthState;
    feedback: FeedbackState;
    location: LocationState;
    global: GlobalState;
  }>,
  AnyAction
> = combineReducers({
  auth: authReducer,
  feedback: feedbackReducer,
  location: locationReducer,
  global: globalReducer
});

export default rootReducer;
