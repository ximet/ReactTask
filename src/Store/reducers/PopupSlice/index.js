import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const popupSlice = createSlice({
  name: 'popup',
  initialState: initialState,
  reducers: {
    setMessage(state, action) {
      state.popupMessage = action.payload;
    }
  }
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
