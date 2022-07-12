import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme(state, action) {
      state.darkTheme = action.payload;
    }
  }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
