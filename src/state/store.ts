import { configureStore } from "@reduxjs/toolkit";

import { localApiSlice } from "./rootQuery";
import reducer from "./rootReducer";

const store = configureStore({
  devTools: true,
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
