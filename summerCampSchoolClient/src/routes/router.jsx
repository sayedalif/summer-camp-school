import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home";
import HomePage from "../pages/Home/Home/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Classes from "../pages/Classes";
import ErrorPage from "../pages/shared/ErrorPage";

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

]);

