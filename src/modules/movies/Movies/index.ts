export { default } from "./component";
export { default as moviesInputPlaceholderEn } from "./locales/en";
export { default as moviesInputPlaceholderUk } from "./locales/uk";

export {
  actions as moviesActions,
  reducerName as moviesReducerName,
  reducer as moviesReducer,
} from "./slice";

export type { InitialState as MoviesInitialState } from "./slice";

export * as moviesSelectors from "./selectors";
