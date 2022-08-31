import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// API
import { forecaApi } from '../services/forecaApi';

// Reducers
import themeReducer from '../features/theme/themeSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    [forecaApi.reducerPath]: forecaApi.reducer,
    theme: themeReducer,
    auth: authReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(forecaApi.middleware)
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
