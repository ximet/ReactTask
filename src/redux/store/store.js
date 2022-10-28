import { configureStore } from '@reduxjs/toolkit';
import commentSlice from '../features/commentSlice';
import themeSlice from '../features/themeSlice';

export const store = configureStore({
  reducer: {
    comment: commentSlice,
    theme: themeSlice
  }
});
