import { RoutesPath } from "@constants/routes";
import { useNavigate } from "react-router-dom";

const useContainer = () => {
  const navigate = useNavigate();

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
    handleToHome,
    handleToMovies,
    handleToTvSeries,
    handleToBookmarked,
  };
};

export default useContainer;
