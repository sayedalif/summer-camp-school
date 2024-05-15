import useAuth from '../hooks/useAuth';
// import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import useUserInfo from '../hooks/useUserInfo';
const InstructorRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useAuth();

  const { data: userInfo, error, isLoading, refetch } = useUserInfo();

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && userInfo?.role === 'instructor') {
    return children;
  }
  return <Navigate to={`/`} state={{ location }} replace></Navigate>
};

export default InstructorRoute;