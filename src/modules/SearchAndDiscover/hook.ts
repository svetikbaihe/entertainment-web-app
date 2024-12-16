import { useCallback, useMemo } from "react";

import { RoutesKeys } from "@constants/routes";
import { homeActions, homeSelectors } from "@modules/home/Home";
import { moviesSelectors, moviesActions } from "@modules/movies/Movies";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { useMatches } from "react-router-dom";

const useContainer = () => {
  const matches = useMatches();

  const currentPage = matches.at(-1)?.id as RoutesKeys;
  const isHome = matches.at(-1)?.id === RoutesKeys.HOME;
  const isMovies = matches.at(-1)?.id === RoutesKeys.MOVIES;
  const isTVSeries = matches.at(-1)?.id === RoutesKeys.TV_SERIES;
  const isBookmarked = matches.at(-1)?.id === RoutesKeys.BOOKMARKED_MOVIES;

  console.log(isTVSeries);
  console.log(isBookmarked);

  const selectors = {
    [RoutesKeys.HOME]: homeSelectors.searchValueSelector,
    [RoutesKeys.MOVIES]: moviesSelectors.searchValueSelector,
    [RoutesKeys.TV_SERIES]: homeSelectors.searchValueSelector,
    [RoutesKeys.BOOKMARKED_MOVIES]: homeSelectors.searchValueSelector,
  };

  const searchedValue = useSelector(selectors[currentPage]);

  const dispatch = useDispatch();

  const debouncedSetSearchValue = useMemo(() => {
    return debounce((value: string) => {
      if (isHome) {
        dispatch(homeActions.setSearchValue(value));
      }
      if (isMovies) {
        dispatch(moviesActions.setSearchValue(value));
      }
    }, 500);
  }, [dispatch, isHome, isMovies]);

  useCallback(() => {
    return () => {
      debouncedSetSearchValue.cancel();
    };
  }, [debouncedSetSearchValue]);

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    debouncedSetSearchValue(e.target.value);
  };

  return { searchedValue, handleSearchChange };
};

export default useContainer;
