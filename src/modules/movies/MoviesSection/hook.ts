import { dashboardSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(dashboardSelectors.mediaDataSelector);

  const moviesData = data?.filter(item => item.category === "Movie");

  return { moviesData };
};

export default useContainer;
