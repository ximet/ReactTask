import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const prevPageSlice = createSlice({
  name: 'prevPage',
  initialState: initialState,
  reducers: {
    setPrevPage(state, action) {
      state.prevPage = action.payload;
    }
  }
});

export const prevPageActions = prevPageSlice.actions;

export default prevPageSlice.reducer;
