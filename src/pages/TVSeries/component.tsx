import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import TVSeries from "@modules/tvSeries/TVSeries";

const TVSeriesPage: React.FC = () => {
  return <TVSeries />;
};

TVSeriesPage.displayName = ROUTES[RoutesKeys.TV_SERIES].DISPLAY_NAME;

export default TVSeriesPage;
