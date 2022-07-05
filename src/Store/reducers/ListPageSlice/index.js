import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const listPageSlice = createSlice({
  name: 'listPage',
  initialState: initialState,
  reducers: {
    setCurrentCountry(state, action) {
      state.currentCountry = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    setCityWeather(state, action) {
      state.cityWeather = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  }
});

export const listPageActions = listPageSlice.actions;

export default listPageSlice.reducer;
