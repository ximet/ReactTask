import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface InitialState {
  token: null | string;
}

const initialState: InitialState = {
  token: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    }
  }
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.token;
