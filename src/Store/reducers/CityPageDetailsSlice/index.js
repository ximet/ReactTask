import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const cityPageDetailsSlice = createSlice({
  name: 'cityPageDetails',
  initialState: initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
    setCityDetails(state, action) {
      state.cityDetails = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  }
});

export const cityPageDetailsActions = cityPageDetailsSlice.actions;

export default cityPageDetailsSlice.reducer;
