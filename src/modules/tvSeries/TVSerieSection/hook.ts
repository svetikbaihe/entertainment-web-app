import { dashboardSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(dashboardSelectors.mediaDataSelector);

  const tvSeriesData = data.filter(item => item.category === "TV Series");

  return { tvSeriesData };
};

export default useContainer;
