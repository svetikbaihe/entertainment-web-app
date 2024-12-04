import { TABLET_QUERY } from "@constants/app";
import { localDataSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const useContainer = () => {
  const data = useSelector(localDataSelectors.dataLocalSelector);

  const isTablet = useMediaQuery({ query: TABLET_QUERY });

  const trendingData = data?.filter(item => item.isTrending);

  return { trendingData, isTablet };
};

export default useContainer;
