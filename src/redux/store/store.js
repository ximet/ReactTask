import { configureStore } from '@reduxjs/toolkit';
import commentSlice from '../features/commentSlice';

export const store = configureStore({
  reducer: {
    comment: commentSlice
  }
});
