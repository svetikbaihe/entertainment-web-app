import { counterReducerName, counterReducer } from "@modules/Counter";
import { combineReducers } from "@reduxjs/toolkit";

import { localApiSlice } from "./rootQuery";

const rootReducer = combineReducers({
  [counterReducerName]: counterReducer,
  [localApiSlice.reducerPath]: localApiSlice.reducer,
});

export default rootReducer;
