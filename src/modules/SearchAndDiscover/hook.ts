import { useCallback } from "react";

import { RoutesKeys } from "@constants/routes";
import {
  bookmarkedActions,
  bookmarkedSelectors,
} from "@modules/bookmarked/BookmarkedMedia";
import { homeActions, homeSelectors } from "@modules/home/Home";
import { moviesSelectors, moviesActions } from "@modules/movies/Movies";
import { tvSeriesActions, tvSeriesSelectors } from "@modules/tvSeries/TVSeries";
import { useDispatch, useSelector } from "react-redux";
import { useMatches } from "react-router-dom";

const useContainer = () => {
  const matches = useMatches();

  const currentPage = matches.at(-1)?.id as Extract<
    RoutesKeys,
    | RoutesKeys.HOME
    | RoutesKeys.MOVIES
    | RoutesKeys.TV_SERIES
    | RoutesKeys.BOOKMARKED_MOVIES
  >;
  const isHome = matches.at(-1)?.id === RoutesKeys.HOME;
  const isMovies = matches.at(-1)?.id === RoutesKeys.MOVIES;
  const isTVSeries = matches.at(-1)?.id === RoutesKeys.TV_SERIES;
  const isBookmarked = matches.at(-1)?.id === RoutesKeys.BOOKMARKED_MOVIES;

  const selectors = {
    [RoutesKeys.HOME]: homeSelectors.searchValueSelector,
    [RoutesKeys.MOVIES]: moviesSelectors.searchValueSelector,
    [RoutesKeys.TV_SERIES]: tvSeriesSelectors.searchValueSelector,
    [RoutesKeys.BOOKMARKED_MOVIES]: bookmarkedSelectors.searchValueSelector,
  };

  const searchedValue = useSelector(selectors[currentPage]);

  const dispatch = useDispatch();

  const handleSearchChange = useCallback(
    (value: string) => {
      if (isHome) {
        dispatch(homeActions.setSearchValue(value));
      }
      if (isMovies) {
        dispatch(moviesActions.setSearchValue(value));
      }
      if (isBookmarked) {
        dispatch(bookmarkedActions.setSearchValue(value));
      }
      if (isTVSeries) {
        dispatch(tvSeriesActions.setSearchValue(value));
      }
    },
    [dispatch, isHome, isMovies, isBookmarked, isTVSeries]
  );

  return { searchedValue, handleSearchChange };
};

export default useContainer;
