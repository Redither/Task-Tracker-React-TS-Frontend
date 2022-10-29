import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/index';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore()

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) for use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
