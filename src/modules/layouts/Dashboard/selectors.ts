import { localApiSlice } from "@state/rootQuery";
import type { RootState } from "@state/store";
import { createSelector } from "reselect";

const getLocalApiSelector = localApiSlice.endpoints.getLocalData.select(null);

export const dataSelector = (state: RootState) => getLocalApiSelector(state);

export const dataLocalSelector = createSelector(
  dataSelector,
  data => data.data
);

export const isLoadingSelector = createSelector(
  dataSelector,
  data => data.isLoading
);
