import { bookmarkedInputPlaceholderUk } from "@modules/bookmarked/BookmarkedMedia";
import { bookmarkedUk } from "@modules/bookmarked/BookmarkedSection";
import { homeUk } from "@modules/home/Home";
import { recommendedUk } from "@modules/home/Recommended";
import { trendingUk } from "@modules/home/Trending";
import { loginFormUk } from "@modules/auth/Login/LoginForm";
import { signUpFormUk } from "@modules/auth/SignUp/SignUpForm";
import { moviesInputPlaceholderUk } from "@modules/movies/Movies";
import { moviesUk } from "@modules/movies/MoviesSection";
import { searchResultsUk } from "@modules/SearchResults";
import { tvSeriesInputPlaceholderUk } from "@modules/tvSeries/TVSeries";
import { tvSeriesUk } from "@modules/tvSeries/TVSeriesSection";
import { languageSwitcherUk } from "@modules/LanguageSwitcher";

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
    ...moviesUk,
    ...moviesInputPlaceholderUk,
    ...bookmarkedUk,
    ...bookmarkedInputPlaceholderUk,
    ...tvSeriesUk,
    ...tvSeriesInputPlaceholderUk,
    ...loginFormUk,
    ...signUpFormUk,
    ...languageSwitcherUk,
  },
};
