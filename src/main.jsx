import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/product', element: <Product></Product> },
      { path: '/cart', element: <Cart></Cart> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
