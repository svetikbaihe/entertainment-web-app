import { SKELETONS_ARRAY } from "@constants/app";
import { dashboardSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(dashboardSelectors.mediaDataSelector);

  const skeletons = SKELETONS_ARRAY.slice(0, 5);

  const isLoading = useSelector(dashboardSelectors.isLoadingSelector);

  const trendingData = data?.filter(item => item.isTrending);

  return { trendingData, skeletons, isLoading };
};

export default useContainer;
