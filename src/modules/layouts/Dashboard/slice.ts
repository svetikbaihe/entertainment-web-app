import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { MediaItem } from "@type/app";

export interface InitialState {
  mediaData: MediaItem[];
}

export const initialState: InitialState = {
  mediaData: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setMediaData: (state: InitialState, action: PayloadAction<MediaItem[]>) => {
      state.mediaData = action.payload;
    },
    toggleBookmark: (
      state: InitialState,
      action: PayloadAction<Pick<MediaItem, "id">>
    ) => {
      state.mediaData = state.mediaData.map(item =>
        item.id === action.payload.id
          ? { ...item, isBookmarked: !item.isBookmarked }
          : item
      );
    },
  },
});

export const reducerName = dashboardSlice.name;

export const reducer = dashboardSlice.reducer;

export const actions = {
  ...dashboardSlice.actions,
};
