import { useMemo } from "react";

import { RoutesKeys } from "@constants/routes";
import { localDataSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";
import { useMatches } from "react-router-dom";

import { SearchResultsProps } from "./types";

const useContainer = ({
  searchedValue,
}: Pick<SearchResultsProps, "searchedValue">) => {
  const data = useSelector(localDataSelectors.dataLocalSelector);

  const moviesData = data?.filter(item => item.category === "Movie");
  const tvSeriesData = data?.filter(item => item.category === "TV Series");
  const bookmarkedData = data?.filter(item => item.isBookmarked);

  const matches = useMatches();

  const isHome = matches.at(-1)?.id === RoutesKeys.HOME;
  const isMovies = matches.at(-1)?.id === RoutesKeys.MOVIES;
  const isTVSeries = matches.at(-1)?.id === RoutesKeys.TV_SERIES;
  const isBookmarked = matches.at(-1)?.id === RoutesKeys.BOOKMARKED_MOVIES;

  const filteredResult = useMemo(() => {
    if (isHome) {
      return data?.filter(item =>
        item.title.toLowerCase().includes(searchedValue.toLowerCase())
      );
    }
    if (isMovies) {
      return moviesData?.filter(item =>
        item.title.toLowerCase().includes(searchedValue.toLowerCase())
      );
    }
    if (isTVSeries) {
      return tvSeriesData?.filter(item =>
        item.title.toLowerCase().includes(searchedValue.toLowerCase())
      );
    }
    if (isBookmarked) {
      return bookmarkedData?.filter(item =>
        item.title.toLowerCase().includes(searchedValue.toLowerCase())
      );
    }
  }, [
    data,
    bookmarkedData,
    isBookmarked,
    isHome,
    isMovies,
    isTVSeries,
    moviesData,
    searchedValue,
    tvSeriesData,
  ]);

  const matchedResult = filteredResult;

  return {
    matchedResult,
    quantity: matchedResult?.length,
  };
};

export default useContainer;
