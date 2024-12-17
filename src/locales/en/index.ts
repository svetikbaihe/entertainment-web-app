import { bookmarkedInputPlaceholderEn } from "@modules/bookmarked/BookmarkedMedia";
import { bookmarkedEn } from "@modules/bookmarked/BookmarkedSection";
import { homeEn } from "@modules/home/Home";
import { recommendedEn } from "@modules/home/Recommended";
import { trendingEn } from "@modules/home/Trending";
import { moviesInputPlaceholderEn } from "@modules/movies/Movies";
import { moviesEn } from "@modules/movies/MoviesSection";
import { searchResultsEn } from "@modules/SearchResults";
import { tvSeriesInputPlaceholderEn } from "@modules/tvSeries/TVSeries";
import { tvSeriesEn } from "@modules/tvSeries/TVSerieSection";

import shared from "./shared";
import yup from "./yup";

export default {
  locale: "en" as const,
  messages: {
    /** @group Shared */
    ...shared,
    ...yup,
    ...trendingEn,
    ...homeEn,
    ...recommendedEn,
    ...searchResultsEn,
    ...moviesEn,
    ...moviesInputPlaceholderEn,
    ...bookmarkedEn,
    ...bookmarkedInputPlaceholderEn,
    ...tvSeriesEn,
    ...tvSeriesInputPlaceholderEn,
  },
};
