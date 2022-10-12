import { createStore, applyMiddleware, compose, $CombinedState } from 'redux';
import thunk from 'redux-thunk';

// Local storage
import { loadState, saveState } from 'services/localStorage';

// Utils
import { throttle } from 'utils/helpers';

// Types
import type { AuthState } from './reducers/auth';
import type { FeedbackState } from './reducers/feedback';
import type { LocationState } from './reducers/location';
import type { GlobalState } from './reducers/global';

// Reducer
import rootReducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistedState = loadState<
  {
    readonly [$CombinedState]?: undefined;
  } & {
    auth: AuthState;
    feedback: FeedbackState;
    location: LocationState;
    global: GlobalState;
  }
>();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(
  throttle(() => {
    saveState({
      feedback: store.getState().feedback
    });
  }, 1000)
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
