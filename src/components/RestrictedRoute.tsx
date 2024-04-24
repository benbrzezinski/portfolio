import { Navigate } from "react-router-dom";
import { RouteProps } from "../types";
import useAuth from "../hooks/useAuth";

const RestrictedRoute = ({ redirectTo, component: Component }: RouteProps) => {
  const { isUserAllowed } = useAuth();

  return isUserAllowed ? Component : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
