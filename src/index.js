import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Register from './pages/registerPage';

// Kök rotayı Register componenti ile güncelle
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Register />} />
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
