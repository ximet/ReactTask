import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import sumbitFeedbackReducer from './actions';
import { refreshFromLocalStorage, localStorageMiddleware } from './localStorageService';

export default configureStore({
  reducer: {
    feedback: sumbitFeedbackReducer
  },
  preloadedState: refreshFromLocalStorage(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware).concat(logger)
});
