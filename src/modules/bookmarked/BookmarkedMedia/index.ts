export { default } from "./component";
export { default as bookmarkedInputPlaceholderEn } from "./locales/en";
export { default as bookmarkedInputPlaceholderUk } from "./locales/uk";

export {
  actions as bookmarkedActions,
  reducerName as bookmarkedReducerName,
  reducer as bookmarkedReducer,
} from "./slice";

export type { InitialState as BookmarkedInitialState } from "./slice";

export * as bookmarkedSelectors from "./selectors";
