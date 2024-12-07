import { DESKTOP_QUERY, MOBILE_QUERY, TABLET_QUERY } from "@constants/app";
import { localDataSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const useContainer = () => {
  const data = useSelector(localDataSelectors.dataLocalSelector);

  const isDesktop = useMediaQuery({ query: DESKTOP_QUERY });
  const isTablet = useMediaQuery({ query: TABLET_QUERY });
  const isMobile = useMediaQuery({ query: MOBILE_QUERY });

  const notTrendingData = data?.filter(item => !item.isTrending);

  return { notTrendingData, isTablet, isDesktop, isMobile };
};

export default useContainer;
