import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  searchValue: string;
}

export const initialState: InitialState = {
  searchValue: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const reducerName = homeSlice.name;

export const reducer = homeSlice.reducer;

export const actions = {
  ...homeSlice.actions,
};
