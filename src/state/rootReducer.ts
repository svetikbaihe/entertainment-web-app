import { signUpReducer, signUpReducerName } from "@modules/auth/SignUp";
import {
  bookmarkedReducer,
  bookmarkedReducerName,
} from "@modules/bookmarked/BookmarkedMedia";
import { homeReducer, homeReducerName } from "@modules/home/Home";
import {
  dashboardReducer,
  dashboardReducerName,
} from "@modules/layouts/Dashboard";
import { moviesReducer, moviesReducerName } from "@modules/movies/Movies";
import {
  tvSeriesReducer,
  tvSeriesReducerName,
} from "@modules/tvSeries/TVSeries";
import { combineReducers } from "@reduxjs/toolkit";

import { localApiSlice } from "./rootQuery";

const rootReducer = combineReducers({
  [homeReducerName]: homeReducer,
  [moviesReducerName]: moviesReducer,
  [bookmarkedReducerName]: bookmarkedReducer,
  [dashboardReducerName]: dashboardReducer,
  [tvSeriesReducerName]: tvSeriesReducer,
  [signUpReducerName]: signUpReducer,
  [localApiSlice.reducerPath]: localApiSlice.reducer,
});

export default rootReducer;
