import {
  bookmarkedReducer,
  bookmarkedReducerName,
} from "@modules/bookmarked/BookmarkedMedia";
import { counterReducerName, counterReducer } from "@modules/Counter";
import { homeReducer, homeReducerName } from "@modules/home/Home";
import {
  dashboardReducer,
  dashboardReducerName,
} from "@modules/layouts/Dashboard";
import { moviesReducer, moviesReducerName } from "@modules/movies/Movies";
import { combineReducers } from "@reduxjs/toolkit";

import { localApiSlice } from "./rootQuery";

const rootReducer = combineReducers({
  [counterReducerName]: counterReducer,
  [homeReducerName]: homeReducer,
  [moviesReducerName]: moviesReducer,
  [bookmarkedReducerName]: bookmarkedReducer,
  [dashboardReducerName]: dashboardReducer,
  [localApiSlice.reducerPath]: localApiSlice.reducer,
});

export default rootReducer;
