export {
  actions as dashboardActions,
  reducerName as dashboardReducerName,
  reducer as dashboardReducer,
} from "./slice";

export type { InitialState as DashboardInitialState } from "./slice";

export * as dashboardSelectors from "./selectors";
