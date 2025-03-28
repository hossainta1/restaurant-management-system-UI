import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },

        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },

    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // Normal User Routes
       
        {
          path: 'cart',
          element: <Cart></Cart>
        },

        // Admin routes start
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },

        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },

        {
          path: 'users',
          element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
        },

        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
        // Admin routes end
      ]
    }
  ]);