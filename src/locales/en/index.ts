import { trendingEn } from "@modules/home/Trending";
import { homeEn } from "@pages/Home";
import { recommendedEn } from "@modules/home/Recommended";

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
  },
};
