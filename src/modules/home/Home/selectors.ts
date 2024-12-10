import type { RootState } from "@state/store";
import { createSelector } from "reselect";

import { reducerName } from "./slice";

export const dataSelector = (state: RootState) => state[reducerName];

export const searchValueSelector = createSelector(dataSelector, data => data.searchValue);
