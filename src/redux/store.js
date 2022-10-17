import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import sumbitFeedbackReducer from './actions';

export default configureStore({
  reducer: {
    feedback: sumbitFeedbackReducer
  },
  middleware: [thunk, logger]
});
