import { SKELETONS_ARRAY } from "@constants/app";
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

  const isLoading = useSelector(dashboardSelectors.isLoadingSelector);

  return { bookmarkedMovieData, bookmarkedTVSeriesData, skeletons: SKELETONS_ARRAY, isLoading };
};

export default useContainer;
