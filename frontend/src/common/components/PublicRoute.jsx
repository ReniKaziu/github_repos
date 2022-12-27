import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

const PublicRoute = ({ children }) => {
  let location = useLocation();
  const { token } = useContext(AuthContext);

  if (token) {
    return <Navigate to={"/home"} state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PublicRoute;
