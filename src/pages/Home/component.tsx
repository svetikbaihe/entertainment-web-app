import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import { Component as Home } from "@modules/home/Home/lazy";
import ProtectedRoute from "@modules/ProtectedRoute";

const HomePage: React.FC = () => {
  return <ProtectedRoute Component={<Home />} />;
};

HomePage.displayName = ROUTES[RoutesKeys.HOME].DISPLAY_NAME;

export default HomePage;
