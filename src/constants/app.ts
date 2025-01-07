export const MOBILE_QUERY = "(min-width: 375px)";
export const TABLET_QUERY = "(min-width: 768px)";
export const DESKTOP_QUERY = "(min-width: 1440px)";

export const MIN_LENGTH_PASSWORD = 8;
export const MAX_LENGTH_PASSWORD = 20;
export const MIN_ONE_UPPER_LETTER_REGEX = /[A-Z]/;
export const MIN_ONE_LOWER_LETTER_REGEX = /[a-z]/;
export const MIN_ONE_NUM_REGEX = /\d/;
export const MIN_ONE_SPECIAL_CHAR_REGEX = /[@$!%*?&]/;

export enum UserRoles {
  USER = "user",
}

export enum LocalStorageKeys {
  ROLE = "role",
}

export const SKELETONS_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];