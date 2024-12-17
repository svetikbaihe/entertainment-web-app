import { dashboardSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(dashboardSelectors.mediaDataSelector);

  const bookmarkedMovieData = data?.filter(
    item => item.isBookmarked === true && item.category === "Movie"
  );
  const bookmarkedTVSeriesData = data?.filter(
    item => item.isBookmarked === true && item.category === "TV Series"
  );

  return { bookmarkedMovieData, bookmarkedTVSeriesData };
};

export default useContainer;
