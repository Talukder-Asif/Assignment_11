import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage/HomePage';
import FoodItems from './Pages/AllFoodItems/FoodItems';
import Blog from './Pages/BlogPage/Blog';
import Login from './Pages/LoginPage/Login';
import DashBoard from './Pages/UserProfile/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>,
        loader: () => fetch('http://localhost:5000/top6foods'),
      },
      {
        path:'/foodItems',
        element:<FoodItems></FoodItems>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/signin',
        element:<Login></Login>
      },
      {
        path:'/userName',
        element:<DashBoard></DashBoard>
      }
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
