import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { authApi } from '../../services/authApi';

// Types
import { AccessToken } from '../../types';

interface InitialState {
  accessToken: AccessToken;
}

const initialState: InitialState = {
  accessToken: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.authenticate.matchFulfilled, (state, action) => {
      state.accessToken = action.payload.token;
    });
  }
});

export default authSlice.reducer;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
