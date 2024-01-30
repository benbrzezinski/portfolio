import { Navigate } from "react-router-dom";
import { RoutesTypes } from "../types";
import useAuth from "../hooks/useAuth";

const RestrictedRoute = ({ redirectTo, component: Component }: RoutesTypes) => {
  const { isUserAllowed } = useAuth();

  return isUserAllowed ? Component : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
