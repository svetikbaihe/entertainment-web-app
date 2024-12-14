import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  searchValue: string;
}

export const initialState: InitialState = {
  searchValue: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const reducerName = moviesSlice.name;

export const reducer = moviesSlice.reducer;

export const actions = {
  ...moviesSlice.actions,
};
