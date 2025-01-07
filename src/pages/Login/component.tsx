import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import { Component as Login } from "@modules/auth/Login/lazy";
import ProtectedRoute from "@modules/ProtectedRoute";

const LoginPage: React.FC = () => {
  return <ProtectedRoute Component={<Login />} />;
};

LoginPage.displayName = ROUTES[RoutesKeys.LOGIN].DISPLAY_NAME;

export default LoginPage;
