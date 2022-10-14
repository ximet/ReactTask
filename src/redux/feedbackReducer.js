import { createSlice } from '@reduxjs/toolkit';

import { FEEDBACK } from '../components/constants';

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: {
    feedback: JSON.parse(localStorage.getItem(FEEDBACK)) || []
  },
  reducers: {
    sumbitFeedback: (state, action) => {
      if (state.feedback?.length > 0) {
        state.feedback = [...state.feedback, action.payload];
      } else {
        state.feedback = [action.payload];
      }
      localStorage.setItem(FEEDBACK, JSON.stringify(state.feedback));
    }
  }
});

export const { sumbitFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;
