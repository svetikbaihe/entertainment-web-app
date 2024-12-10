import { trendingEn } from "@modules/home/Trending";
import { homeEn } from "@modules/home/Home";
import { recommendedEn } from "@modules/home/Recommended";
import { searchResultsEn } from "@modules/SearchResults";

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
  },
};
