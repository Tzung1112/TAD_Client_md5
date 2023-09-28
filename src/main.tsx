import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './stores';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

