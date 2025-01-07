import type React from "react";

import { Navigate } from "react-router-dom";

import useContainer from "./hook";

interface ProtectedRouteProps {
  Component: React.ReactNode;
  isLayout?: boolean;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  Component,
  isLayout = false,
}) => {
  const { hasAccess, redirectTo, isAuth, isDashboard } = useContainer(isLayout);

  if (hasAccess && isAuth) {
    return <Navigate to={redirectTo} replace={true} />;
  }

  if (!hasAccess && isDashboard) {
    return <Navigate to={redirectTo} replace={true} />;
  }

  return Component;
};

export default ProtectedRoute;
