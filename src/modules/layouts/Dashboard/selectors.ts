import { localApiSlice } from "@state/rootQuery";
import type { RootState } from "@state/store";
import { createSelector } from "reselect";

import { reducerName } from "./slice";

const getLocalApiSelector = localApiSlice.endpoints.getLocalData.select(null);

export const dataQuerySelector = (state: RootState) =>
  getLocalApiSelector(state);
export const dataSelector = (state: RootState) => state[reducerName];

export const mediaDataSelector = createSelector(
  dataSelector,
  data => data.mediaData
);

export const isLoadingSelector = createSelector(
  dataQuerySelector,
  data => data.isLoading
);
