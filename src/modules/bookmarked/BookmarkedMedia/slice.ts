import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  searchValue: string;
}

export const initialState: InitialState = {
  searchValue: "",
};

const bookmarkedSlice = createSlice({
  name: "bookmarked",
  initialState,
  reducers: {
    setSearchValue: (state: InitialState, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const reducerName = bookmarkedSlice.name;

export const reducer = bookmarkedSlice.reducer;

export const actions = {
  ...bookmarkedSlice.actions,
};
