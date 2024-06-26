import {
  createBrowserRouter
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/shared/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import AddClass from "../pages/Dashboard/AddClass";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes";
import MyClass from "../pages/Dashboard/MyClass";
import Instructors from "../pages/Instructors";
import InstructorClasses from "../pages/InstructorClasses";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses";
import SelectedClasses from "../pages/Dashboard/SelectedClasses";
import Payment from "../pages/Dashboard/payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import AdminRoute from "../Layout/AdminRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import ManageStudents from "../pages/Dashboard/ManageStudents";
import ManageClasses from "../pages/Dashboard/ManageClasses";

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
        path: '/profile',
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: '/instructors',
        element: <PrivateRoute>
          <Instructors></Instructors>
        </PrivateRoute>,
      },
      {
        path: '/instructors/:id',
        element: <PrivateRoute>
          <InstructorClasses></InstructorClasses>
        </PrivateRoute>,
      },
      {
        path: '/classes',
        element: <PrivateRoute>
          <Classes></Classes>
        </PrivateRoute>,
      },
      {
        path: '/dashboard',
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
          {
            path: '/dashboard/selectedclasses',
            element: <PrivateRoute>
              <SelectedClasses></SelectedClasses>
            </PrivateRoute>,
          },
          {
            path: '/dashboard/enrolledclasses',
            element: <PrivateRoute>
              <EnrolledClasses></EnrolledClasses>
            </PrivateRoute>,
          },
          {
            path: '/dashboard/addclass',
            element: <InstructorRoute>
              <AddClass></AddClass>
            </InstructorRoute>
          },
          {
            path: '/dashboard/myclass',
            element: <InstructorRoute>
              <MyClass></MyClass>
            </InstructorRoute>
          },
          {
            path: '/dashboard/payment',
            element: <PrivateRoute>
              <Payment></Payment>
            </PrivateRoute>
          },
          {
            path: '/dashboard/paymentshistory',
            element: <PrivateRoute>
              <PaymentHistory></PaymentHistory>
            </PrivateRoute>
          }
          ,
          {
            path: '/dashboard/manageusers',
            element: <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          }
          ,
          {
            path: '/dashboard/managestudents/:id',
            element: <AdminRoute>
              <ManageStudents></ManageStudents>
            </AdminRoute>
          }
          ,
          {
            path: '/dashboard/manageclasses',
            element: <AdminRoute>
              <ManageClasses></ManageClasses>
            </AdminRoute>
          }
        ]
      },

    ],

  },
]);

