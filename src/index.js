import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { persistor, store } from './app/store';
import { Provider } from 'react-redux';
import { apiSlice } from './api/apiSlice';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);
