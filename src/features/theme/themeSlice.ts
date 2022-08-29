import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  theme: string;
}

const initialState: InitialState = {
  theme: 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
