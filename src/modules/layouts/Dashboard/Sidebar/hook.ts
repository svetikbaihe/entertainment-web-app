import { RoutesPath, RoutesKeys } from "@constants/routes";
import { useMatches, useNavigate } from "react-router-dom";

const useContainer = () => {
  const navigate = useNavigate();

  const matches = useMatches();

  const isActiveHome = matches.at(-1)?.id === RoutesKeys.HOME;

  const isActiveMovies = matches.at(-1)?.id === RoutesKeys.MOVIES;

  const isActiveTVSeries = matches.at(-1)?.id === RoutesKeys.TV_SERIES;

  const isActiveBookmarked = matches.at(-1)?.id === RoutesKeys.BOOKMARKED_MOVIES;

  const handleToHome = () => {
    navigate(RoutesPath.HOME);
  };

  const handleToMovies = () => {
    navigate(RoutesPath.MOVIES);
  };

  const handleToTvSeries = () => {
    navigate(RoutesPath.TV_SERIES);
  };

  const handleToBookmarked = () => {
    navigate(RoutesPath.BOOKMARKED_MOVIES);
  };

  return {
    isActiveHome,
    isActiveMovies,
    isActiveTVSeries,
    isActiveBookmarked,

    handleToHome,
    handleToMovies,
    handleToTvSeries,
    handleToBookmarked,
  };
};

export default useContainer;
