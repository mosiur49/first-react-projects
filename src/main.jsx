import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop.jsx';
import Home from './component/Layout/Home.jsx';
import Order from './component/Order/Order.jsx';
import Inventory from './component/Inventory/Inventory.jsx';
import Login from './component/Login/Login.jsx';
import cartProductsLoader from './loader/cartProductsLoader.js';
import Checkout from './component/Checkout/Checkout.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'Orders',
        element:<Order></Order>,
        loader:cartProductsLoader
      },
      {
        path:'Inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'checkout',
        element:<Checkout></Checkout>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
