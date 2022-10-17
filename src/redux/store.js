import { configureStore } from '@reduxjs/toolkit';

import sumbitFeedbackReducer from './actions';

export default configureStore({
  reducer: {
    feedback: sumbitFeedbackReducer
  }
});
