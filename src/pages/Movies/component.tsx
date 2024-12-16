import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import Movies from "@modules/movies/Movies";

const MoviesPage: React.FC = () => {
  return <Movies />;
};

Movies.displayName = ROUTES[RoutesKeys.MOVIES].DISPLAY_NAME;

export default MoviesPage;
