import React from 'react';
import {createRoot} from 'react-dom/client';
import AppRouter from './AppRouter';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
