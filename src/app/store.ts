import { configureStore } from '@reduxjs/toolkit';
import polishExtraLeagueSlice from '@/features/polish-extra-league/polishExtraLeagueSlice';
import { apiSlice } from './api';

export const store = configureStore({
  reducer: {
    polishExtraLeague: polishExtraLeagueSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
