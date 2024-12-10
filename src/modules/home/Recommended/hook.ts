import { localDataSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(localDataSelectors.dataLocalSelector);

  const notTrendingData = data?.filter(item => !item.isTrending);

  return { notTrendingData };
};

export default useContainer;
