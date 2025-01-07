import type { RootState } from "@state/store";
import { createSelector } from "reselect";

import { reducerName } from "./slice";

export const dataSelector = (state: RootState) => state[reducerName];

export const usersSelector = createSelector(dataSelector, data => data.users);

export const isSuccessfulSelector = createSelector(
  dataSelector,
  data => data.isSuccessful
);
