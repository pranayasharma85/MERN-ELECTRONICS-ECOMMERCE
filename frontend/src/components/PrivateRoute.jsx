import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// useSelector is a hook that allows you to extract data from the Redux store and use it in your React components.

function PrivateRoute() {
  const { userInfo } = useSelector((state) => state.auth);
  // This line uses the useSelector hook to extract the userInfo property from the Redux store.
  return userInfo ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;
