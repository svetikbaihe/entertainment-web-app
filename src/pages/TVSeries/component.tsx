import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import ProtectedRoute from "@modules/ProtectedRoute";
import { Component as TVSeries } from "@modules/tvSeries/TVSeries/lazy";

const TVSeriesPage: React.FC = () => {
  return <ProtectedRoute Component={<TVSeries />} />;
};

TVSeriesPage.displayName = ROUTES[RoutesKeys.TV_SERIES].DISPLAY_NAME;

export default TVSeriesPage;
