import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import { Component as Movies } from "@modules/movies/Movies/lazy";
import ProtectedRoute from "@modules/ProtectedRoute";

const MoviesPage: React.FC = () => {
  return <ProtectedRoute Component={<Movies />} />;
};

Movies.displayName = ROUTES[RoutesKeys.MOVIES].DISPLAY_NAME;

export default MoviesPage;
