import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  searchValue: string;
}

export const initialState: InitialState = {
  searchValue: "",
};

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState,
  reducers: {
    setSearchValue: (state: InitialState, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const reducerName = tvSeriesSlice.name;

export const reducer = tvSeriesSlice.reducer;

export const actions = {
  ...tvSeriesSlice.actions,
};
