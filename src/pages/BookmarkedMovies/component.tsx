import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";

const BookmarkedMovies: React.FC = () => {
  return <div></div>;
};

BookmarkedMovies.displayName =
  ROUTES[RoutesKeys.BOOKMARKED_MOVIES].DISPLAY_NAME;

export default BookmarkedMovies;
