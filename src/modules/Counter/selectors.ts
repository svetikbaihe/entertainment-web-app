import type { RootState } from "@state/store";
import { createSelector } from "reselect";

import { reducerName } from "./slice";

export const dataSelector = (state: RootState) => state[reducerName];

export const countSelector = createSelector(dataSelector, data => data.count);
export const toDoListSelector = createSelector(
  dataSelector,
  data => data.todoList
);
