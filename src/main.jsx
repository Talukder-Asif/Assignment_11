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
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './Authantication/AuthProvider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
import FoodOrder from './Pages/OrderPage/FoodOrder';
import Profile from './Pages/UserProfile/Profile/Profile';
import AddFoodItems from './Pages/UserProfile/AddFoodItems/AddFoodItems';
import MyFootItems from './Pages/UserProfile/MyFoodItems/MyFootItems';
import UpdateFood from './Pages/UserProfile/UpdateItem/UpdateFood';
import MyOrder from './Pages/UserProfile/MyOrderFood/MyOrder';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import OneBlog from './Pages/BlogPage/OneBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>,
        loader: () => fetch('https://testhalal-server.vercel.app/top6foods'),
      },
      {
        path:'/foodItems',
        element:<FoodItems></FoodItems>,
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
        loader: () =>fetch('/News.json')
      },
      {
        path: '/blog/:id',
        element: <OneBlog></OneBlog>,
        loader: () =>fetch('/News.json')
      },
      {
        path:'/signin',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/foods/:id',
        element:<SingleProduct/>,
        loader: ({params})=> fetch(`https://testhalal-server.vercel.app/foods/${params.id}`)
      },
      {
        path:'/foods/order/:id',
        element:<PrivateRoute>
          <FoodOrder></FoodOrder>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://testhalal-server.vercel.app/foods/${params.id}`)
      },
      {
        path:'/dashboard',
        element:<PrivateRoute>
          <DashBoard></DashBoard>
        </PrivateRoute>,
        children:[
          {
            path:'/dashboard',
            element:<Profile></Profile>,
          },
          {
            path:'/dashboard/addfood',
            element:<AddFoodItems></AddFoodItems>
          },
          {
            path:'/dashboard/foods',
            element:<MyFootItems></MyFootItems>
          },
          {
            path:'/dashboard/update/:id',
            element:<UpdateFood></UpdateFood>,
            loader: ({params})=> fetch(`https://testhalal-server.vercel.app/foods/${params.id}`)
          },
          {
            path: '/dashboard/order',
            element:<MyOrder></MyOrder>
          }
        ]
      }
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
