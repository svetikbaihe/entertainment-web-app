import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import Home from "@modules/home/Home";

const HomePage: React.FC = () => {
  return <Home />;
};

HomePage.displayName = ROUTES[RoutesKeys.HOME].DISPLAY_NAME;

export default HomePage;
