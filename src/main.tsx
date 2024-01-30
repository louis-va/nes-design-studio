import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './main.css'
import Configure from "@/pages/Configure/ConfigurePage"
import Accessories from "@/pages/Accessories/AccessoriesPage"
import Checkout from '@/pages/Checkout/CheckoutPage';
import ConfirmationPage from './pages/Confirmation/ConfirmationPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Configure />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
