import { dashboardSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(dashboardSelectors.mediaDataSelector);

  const notTrendingData = data?.filter(item => !item.isTrending);

  return { notTrendingData };
};

export default useContainer;
