import { localDataSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(localDataSelectors.dataLocalSelector);

  const trendingData = data?.filter(item => item.isTrending);

  return { trendingData };
};

export default useContainer;
