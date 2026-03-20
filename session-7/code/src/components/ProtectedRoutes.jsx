import { Navigate } from "react-router-dom";
import { getToken } from "../services/authServices";

const ProtectedRoutes = ({ children }) => {
  console.log(children);
  const token = getToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;
