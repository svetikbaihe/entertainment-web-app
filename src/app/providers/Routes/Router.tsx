import { LAYOUT, LayoutKeys } from "@constants/layouts";
import { ROUTES, RoutesKeys } from "@constants/routes";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    id: LAYOUT[LayoutKeys.BASE_LAYOUT].KEY,
    path: LAYOUT[LayoutKeys.BASE_LAYOUT].PATH,
    lazy: () => import("@modules/layouts/Base/lazy"),
    children: [
      {
        id: LAYOUT[LayoutKeys.DASHBOARD_LAYOUT].KEY,
        path: LAYOUT[LayoutKeys.DASHBOARD_LAYOUT].PATH,
        lazy: () => import("@modules/layouts/Dashboard/lazy"),
        children: [
          {
            id: ROUTES[RoutesKeys.HOME].KEY,
            path: ROUTES[RoutesKeys.HOME].PATH,
            lazy: () => import("@pages/Home/lazy"),
          },
          {
            id: ROUTES[RoutesKeys.MOVIES].KEY,
            path: ROUTES[RoutesKeys.MOVIES].PATH,
            lazy: () => import("@pages/Movies/lazy"),
          },
          {
            id: ROUTES[RoutesKeys.TV_SERIES].KEY,
            path: ROUTES[RoutesKeys.TV_SERIES].PATH,
            lazy: () => import("@pages/TVSeries/lazy"),
          },
          {
            id: ROUTES[RoutesKeys.BOOKMARKED_MOVIES].KEY,
            path: ROUTES[RoutesKeys.BOOKMARKED_MOVIES].PATH,
            lazy: () => import("@pages/BookmarkedMovies/lazy"),
          },
        ],
      },
    ],
  },
]);

export default Router;
