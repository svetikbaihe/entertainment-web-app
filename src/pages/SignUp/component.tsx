import type React from "react";
import { Component as SignUp } from "@modules/auth/SignUp/lazy";
import { ROUTES, RoutesKeys } from "@constants/routes";
import ProtectedRoute from "@modules/ProtectedRoute";

const SignUpPage: React.FC = () => {
  return <ProtectedRoute Component={<SignUp />} />;
};

SignUpPage.displayName = ROUTES[RoutesKeys.SIGN_UP].DISPLAY_NAME;

export default SignUpPage;
