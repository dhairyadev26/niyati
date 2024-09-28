// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GlobalProvider } from './context/globalContext'; // Adjust path as necessary


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GlobalProvider>
        <App />
    </GlobalProvider>,
);
