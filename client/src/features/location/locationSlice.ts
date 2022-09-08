import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  query: string;
}

const initialState: InitialState = {
  query: ''
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationQuery: (state: InitialState, action: PayloadAction<string>) => {
      state.query = action.payload;
    }
  }
});

export const { setLocationQuery } = locationSlice.actions;

export default locationSlice.reducer;
