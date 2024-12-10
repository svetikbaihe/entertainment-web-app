import { trendingUk } from "@modules/home/Trending";
import { homeUk } from "@modules/home/Home";
import { recommendedUk } from "@modules/home/Recommended";
import { searchResultsUk } from "@modules/SearchResults";

import shared from "./shared";
import yup from "./yup";

export default {
  locale: "uk" as const,
  messages: {
    /** @group Shared */
    ...shared,
    ...yup,
    ...trendingUk,
    ...homeUk,
    ...recommendedUk,
    ...searchResultsUk,
  },
};
