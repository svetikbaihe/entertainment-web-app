import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MediaItem } from "@type/app";

import { InitialState, LanguageType } from "./types";

export const initialState: InitialState = {
  mediaData: [],
  language: LanguageType.EN,
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
    toggleLanguage: (state: InitialState) => {
      state.language =
        state.language === LanguageType.EN ? LanguageType.UK : LanguageType.EN;
    },
    setENLanguage: (state: InitialState) => {
      state.language = LanguageType.EN;
    },
    setUKLanguage: (state: InitialState) => {
      state.language = LanguageType.UK;
    },
  },
});

export const reducerName = dashboardSlice.name;

export const reducer = dashboardSlice.reducer;

export const actions = {
  ...dashboardSlice.actions,
};
