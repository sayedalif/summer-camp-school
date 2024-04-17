import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home";
import HomePage from "../pages/Home/Home/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Classes from "../pages/Classes";
import ErrorPage from "../pages/shared/ErrorPage";
import Dashboard from "../pages/shared/Dashboard";
import AddClass from "../pages/AddClass";
import MyClasses from "../pages/MyClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allclasses',
        element: <Classes></Classes>
      }
    ],

  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/addclass',
        element: <AddClass></AddClass>
      },
      {
        path: '/dashboard/myclasses',
        element: <MyClasses></MyClasses>
      }
    ]
  },

]);

