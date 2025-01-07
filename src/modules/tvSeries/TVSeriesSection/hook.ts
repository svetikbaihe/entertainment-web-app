import { SKELETONS_ARRAY } from "@constants/app";
import { dashboardSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(dashboardSelectors.mediaDataSelector);

  const isLoading = useSelector(dashboardSelectors.isLoadingSelector);

  const tvSeriesData = data.filter(item => item.category === "TV Series");

  return { tvSeriesData, skeletons: SKELETONS_ARRAY, isLoading };
};

export default useContainer;
