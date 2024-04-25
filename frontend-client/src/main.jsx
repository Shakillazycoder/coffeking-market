import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddProduct from './components/AddProduct.jsx';
import MyProduct from './components/MyProduct.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './components/Login.jsx';
import SingUp from './components/SingUp.jsx';
import UpdateProduct from './components/UpdateProduct.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:3000/addProducts')
  },
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('http://localhost:3000/addProducts')
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "/myProduct/",
    element: <MyProduct></MyProduct>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/singUp",
    element: <SingUp></SingUp>,
  },
  {
    path: "/updateProduct/:id",
    element: <UpdateProduct></UpdateProduct>,
    loader: ({params}) => fetch(`http://localhost:3000/singleProduct/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
  </React.StrictMode>,
)
