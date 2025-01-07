import { UserRoles } from "./app";
import { RoutesPath } from "./routes";

export enum LayoutKeys {
  BASE_LAYOUT = "BASE_LAYOUT",
  DASHBOARD_LAYOUT = "DASHBOARD_LAYOUT",
  AUTH_LAYOUT = "AUTH_LAYOUT",
}

export enum LayoutPath {
  BASE_LAYOUT = "/",
}

export const LAYOUT = {
  [LayoutKeys.BASE_LAYOUT]: {
    KEY: LayoutKeys.BASE_LAYOUT,
    PATH: LayoutPath[LayoutKeys.BASE_LAYOUT],
    DISPLAY_NAME: LayoutKeys.BASE_LAYOUT,
    REDIRECT_TO: null,
    ACCESS_ROLES: null,
  },
  [LayoutKeys.DASHBOARD_LAYOUT]: {
    KEY: LayoutKeys.DASHBOARD_LAYOUT,
    PATH: LayoutPath[LayoutKeys.BASE_LAYOUT],
    DISPLAY_NAME: LayoutKeys.DASHBOARD_LAYOUT,
    REDIRECT_TO: RoutesPath.LOGIN,
    ACCESS_ROLES: UserRoles.USER,
  },
  [LayoutKeys.AUTH_LAYOUT]: {
    KEY: LayoutKeys.AUTH_LAYOUT,
    PATH: LayoutPath[LayoutKeys.BASE_LAYOUT],
    DISPLAY_NAME: LayoutKeys.AUTH_LAYOUT,
    REDIRECT_TO: RoutesPath.HOME,
    ACCESS_ROLES: null,
  },
  [LayoutKeys.AUTH_LAYOUT]: {
    KEY: LayoutKeys.AUTH_LAYOUT,
    PATH: LayoutPath[LayoutKeys.BASE_LAYOUT],
    DISPLAY_NAME: LayoutKeys.AUTH_LAYOUT,
  },
};
