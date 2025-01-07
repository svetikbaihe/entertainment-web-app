import { SKELETONS_ARRAY } from "@constants/app";
import { dashboardSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(dashboardSelectors.mediaDataSelector);

  const notTrendingData = data?.filter(item => !item.isTrending);

  const isLoading = useSelector(dashboardSelectors.isLoadingSelector);

  return { notTrendingData, skeletons: SKELETONS_ARRAY, isLoading };
};

export default useContainer;
