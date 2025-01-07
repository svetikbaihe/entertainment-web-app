import { useMemo } from "react";

import { LocalStorageKeys, UserRoles } from "@constants/app";
import { LAYOUT, LayoutKeys } from "@constants/layouts";
import { ROUTES, RoutesKeys } from "@constants/routes";
import { getItem } from "@utils/localStorage";
import { generatePath, useMatches } from "react-router-dom";

interface PageParam {
  id: RoutesKeys | LayoutKeys;
}

const useContainer = (isLayout: boolean) => {
  const currentRole = getItem(LocalStorageKeys.ROLE);

  const matches = useMatches();

  const { route } = useMemo(() => {
    /** @info Layout is always the first element in the array, page is always the last */
    const index = isLayout ? -2 : -1;

    const page = matches.at(index) as PageParam;
    const routeKey = page?.id as RoutesKeys;
    const layoutKey = page?.id as LayoutKeys;

    /**
     * @info We have to reassign the "id" type, which by default is a string,
     * @info and we can't change it, but we need the RoutesKeys type.
     */
    const route = isLayout ? LAYOUT[layoutKey] : ROUTES[routeKey];

    return {
      route,
    };
  }, [isLayout, matches]);

  const redirectTo = generatePath(route.REDIRECT_TO ?? "");

  const isAuth = matches.at(-2)?.id === LayoutKeys.AUTH_LAYOUT;
  const isDashboard = matches.at(-2)?.id === LayoutKeys.DASHBOARD_LAYOUT;

  const hasAccess = UserRoles.USER === currentRole;

  return { hasAccess, redirectTo, isAuth, isDashboard };
};

export default useContainer;
