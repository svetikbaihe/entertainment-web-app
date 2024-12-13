import { homeEn } from "@modules/home/Home";
import { recommendedEn } from "@modules/home/Recommended";
import { trendingEn } from "@modules/home/Trending";
import { searchResultsEn } from "@modules/SearchResults";
import { moviesEn } from "@modules/movies/MoviesSection";

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
  },
};
