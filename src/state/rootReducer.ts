import { counterReducerName, counterReducer } from "@modules/Counter";
import { combineReducers } from "@reduxjs/toolkit";

import { localApiSlice } from "./rootQuery";
import { homeReducer, homeReducerName } from "@modules/home/Home";

const rootReducer = combineReducers({
  [counterReducerName]: counterReducer,
  [homeReducerName]: homeReducer,
  [localApiSlice.reducerPath]: localApiSlice.reducer,
});

export default rootReducer;
