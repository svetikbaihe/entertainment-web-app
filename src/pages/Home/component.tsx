import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";

const Home: React.FC = () => {
  return <div>Home Page</div>;
};

Home.displayName = ROUTES[RoutesKeys.HOME].DISPLAY_NAME;

export default Home;
