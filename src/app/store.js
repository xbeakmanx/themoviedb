import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import filterReducer from '../features/filtersSlice';
import searchReducer from '../features/searchTerm';
import paginationReducer from '../features/pagination';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from '../features/auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['sessionId'], // Solo persiste sessionId
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filters: filterReducer,
    search: searchReducer,
    pagination: paginationReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
