export { default } from "./component";

export {
  actions as counterActions,
  reducerName as counterReducerName,
  reducer as counterReducer,
} from "./slice";

export type { InitialState as CounterInitialState } from "./slice";

export * as counterSelectors from "./selectors";
