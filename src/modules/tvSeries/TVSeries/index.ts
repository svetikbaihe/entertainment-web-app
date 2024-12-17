export { default } from "./component";
export { default as tvSeriesInputPlaceholderEn } from "./locales/en";
export { default as tvSeriesInputPlaceholderUk } from "./locales/uk";

export {
  actions as tvSeriesActions,
  reducerName as tvSeriesReducerName,
  reducer as tvSeriesReducer,
} from "./slice";

export type { InitialState as TvSeriesInitialState } from "./slice";

export * as tvSeriesSelectors from "./selectors";
