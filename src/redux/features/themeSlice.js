import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'light' },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
