import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  token: string;
}

const initialState: InitialState = {
  token: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

export default authSlice.reducer;
