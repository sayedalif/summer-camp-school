import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home";
import HomePage from "../pages/Home/Home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      }
    ],
  },
]);

