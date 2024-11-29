import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";

const TVSeries: React.FC = () => {
  return <div>TV Series Page</div>;
};

TVSeries.displayName = ROUTES[RoutesKeys.TV_SERIES].DISPLAY_NAME;

export default TVSeries;
