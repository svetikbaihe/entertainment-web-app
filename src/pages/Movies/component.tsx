import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";

const Movies: React.FC = () => {
  return <div>Movies Page</div>;
};

Movies.displayName = ROUTES[RoutesKeys.MOVIES].DISPLAY_NAME;

export default Movies;
