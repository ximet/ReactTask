import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feedbackComments: []
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    sumbitFeedback: (state, action) => {
      state.feedbackComments.push(action.payload);
    }
  }
});

export const { sumbitFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
