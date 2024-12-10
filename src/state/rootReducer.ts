import { counterReducerName, counterReducer } from "@modules/Counter";
import { homeReducer, homeReducerName } from "@modules/home/Home";
import { combineReducers } from "@reduxjs/toolkit";

import { localApiSlice } from "./rootQuery";

const rootReducer = combineReducers({
  [counterReducerName]: counterReducer,
  [homeReducerName]: homeReducer,
  [localApiSlice.reducerPath]: localApiSlice.reducer,
});

export default rootReducer;
