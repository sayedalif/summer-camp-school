import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({ children }) => {
  // form auth provider
  const { user, loading } = useContext(AuthContext);
  // location for navigation
  const location = useLocation();

  // in loading state this will show a progress bar.
  if (loading) {
    return <progress className="progress w-56 mx-auto"></progress>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;