import type React from "react";
import ProtectedRoute from "@modules/ProtectedRoute";

import { ROUTES, RoutesKeys } from "@constants/routes";
import {Component as BookmarkedMedia} from "@modules/bookmarked/BookmarkedMedia/lazy";

const BookmarkedMovies: React.FC = () => {
  return <ProtectedRoute Component={<BookmarkedMedia />} />;
};

BookmarkedMovies.displayName =
  ROUTES[RoutesKeys.BOOKMARKED_MOVIES].DISPLAY_NAME;

export default BookmarkedMovies;
