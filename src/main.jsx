import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { routesList } from '@/routes/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routesList} />
  </React.StrictMode>
);
