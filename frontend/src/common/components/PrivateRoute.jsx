import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to={"/"} state={{ from: location }} />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
