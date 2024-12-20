export enum RoutesKeys {
  HOME = "HOME",
  MOVIES = "MOVIES",
  TV_SERIES = "TV_SERIES",
  BOOKMARKED_MOVIES = "BOOKMARKED_MOVIES",
  LOGIN = "LOGIN",
  SIGN_UP = "SIGN_UP",
}

export enum RoutesPath {
  HOME = "/",
  MOVIES = "/movies",
  TV_SERIES = "/tv_series",
  BOOKMARKED_MOVIES = "/bookmarked",
  LOGIN = "/login",
  SIGN_UP = "/sign_up",
}

export const ROUTES = {
  [RoutesKeys.HOME]: {
    KEY: RoutesKeys.HOME,
    PATH: RoutesPath[RoutesKeys.HOME],
    DISPLAY_NAME: RoutesKeys.HOME,
  },
  [RoutesKeys.MOVIES]: {
    KEY: RoutesKeys.MOVIES,
    PATH: RoutesPath[RoutesKeys.MOVIES],
    DISPLAY_NAME: RoutesKeys.MOVIES,
  },
  [RoutesKeys.TV_SERIES]: {
    KEY: RoutesKeys.TV_SERIES,
    PATH: RoutesPath[RoutesKeys.TV_SERIES],
    DISPLAY_NAME: RoutesKeys.TV_SERIES,
  },
  [RoutesKeys.BOOKMARKED_MOVIES]: {
    KEY: RoutesKeys.BOOKMARKED_MOVIES,
    PATH: RoutesPath[RoutesKeys.BOOKMARKED_MOVIES],
    DISPLAY_NAME: RoutesKeys.BOOKMARKED_MOVIES,
  },
  [RoutesKeys.LOGIN]: {
    KEY: RoutesKeys.LOGIN,
    PATH: RoutesPath[RoutesKeys.LOGIN],
    DISPLAY_NAME: RoutesKeys.LOGIN,
  },
  [RoutesKeys.SIGN_UP]: {
    KEY: RoutesKeys.SIGN_UP,
    PATH: RoutesPath[RoutesKeys.SIGN_UP],
    DISPLAY_NAME: RoutesKeys.SIGN_UP,
  },
};
