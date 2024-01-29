import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './main.css'
import Home from "@/pages/Home/HomePage"
import Configure from "@/pages/Configure/ConfigurePage"
import Accessories from "@/pages/Accessories/AccessoriesPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/configure" element={<Configure />} />
      <Route path="/configure/accessories" element={<Accessories />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
