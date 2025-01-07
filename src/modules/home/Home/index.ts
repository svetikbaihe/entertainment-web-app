export { default as homeEn } from "./locales/en";
export { default as homeUk } from "./locales/uk";

export {
  actions as homeActions,
  reducerName as homeReducerName,
  reducer as homeReducer,
} from "./slice";

export type { InitialState as HomeInitialState } from "./slice";

export * as homeSelectors from "./selectors";
