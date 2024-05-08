import {
  createBrowserRouter
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/shared/ErrorPage";
import Dashboard from "../pages/shared/Dashboard";
import AddClass from "../pages/AddClass";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes";
import MyClass from "../pages/MyClass";
import Instructors from "../pages/Instructors";
import InstructorClasses from "../pages/InstructorClasses";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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
        path: '/instructors',
        element: <Instructors></Instructors>,
      },
      {
        path: '/instructors/:id',
        element: <InstructorClasses></InstructorClasses>,
      },
      {
        path: '/classes',
        element: <Classes></Classes>
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
            path: '/dashboard/myclass',
            element: <MyClass></MyClass>
          }
        ]
      },

    ],

  },
]);

