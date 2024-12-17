import { dashboardSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(dashboardSelectors.mediaDataSelector);

  const trendingData = data?.filter(item => item.isTrending);

  return { trendingData };
};

export default useContainer;
