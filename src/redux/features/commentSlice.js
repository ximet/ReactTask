import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  comment: ''
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    }
  }
});

export const { setUserName, setComment } = commentSlice.actions;
export default commentSlice.reducer;
