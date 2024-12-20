import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import LoginForm from "@modules/layouts/Auth/LoginForm";

const LoginPage: React.FC = () => {
  return <LoginForm />;
};

LoginPage.displayName = ROUTES[RoutesKeys.LOGIN].DISPLAY_NAME;

export default LoginPage;
