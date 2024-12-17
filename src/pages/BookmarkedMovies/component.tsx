import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import BookmarkedMedia from "@modules/bookmarked/BookmarkedMedia";

const BookmarkedMovies: React.FC = () => {
  return <BookmarkedMedia />;
};

BookmarkedMovies.displayName =
  ROUTES[RoutesKeys.BOOKMARKED_MOVIES].DISPLAY_NAME;

export default BookmarkedMovies;
