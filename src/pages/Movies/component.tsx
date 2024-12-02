import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import { counterSelectors } from "@modules/Counter";
import { useSelector } from "react-redux";

const Movies: React.FC = () => {
  const counterValue = useSelector(counterSelectors.countSelector);

  return <div>Movies Page {counterValue}</div>;
};

Movies.displayName = ROUTES[RoutesKeys.MOVIES].DISPLAY_NAME;

export default Movies;
