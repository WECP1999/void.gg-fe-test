import { configureStore } from '@reduxjs/toolkit';
import valorantApi from './services/valorantApi';
import mockApi from './services/mockApi';
import valorantPlayersReducer from './features/auxValorant';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    valorantPlayersReducer,
    [valorantApi.reducerPath]: valorantApi.reducer,
    [mockApi.reducerPath]: mockApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      valorantApi.middleware,
      mockApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
