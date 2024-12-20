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
  },
  [LayoutKeys.DASHBOARD_LAYOUT]: {
    KEY: LayoutKeys.DASHBOARD_LAYOUT,
    PATH: LayoutPath[LayoutKeys.BASE_LAYOUT],
    DISPLAY_NAME: LayoutKeys.DASHBOARD_LAYOUT,
  },
  [LayoutKeys.AUTH_LAYOUT]: {
    KEY: LayoutKeys.AUTH_LAYOUT,
    PATH: LayoutPath[LayoutKeys.BASE_LAYOUT],
    DISPLAY_NAME: LayoutKeys.AUTH_LAYOUT,
  },
};
