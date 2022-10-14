import { configureStore } from '@reduxjs/toolkit';
import sumbitFeedbackReducer from './feedbackReducer';

export default configureStore({
  reducer: {
    feedback: sumbitFeedbackReducer
  }
});
