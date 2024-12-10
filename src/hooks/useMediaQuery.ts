import { DESKTOP_QUERY, MOBILE_QUERY, TABLET_QUERY } from "@constants/app";
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isDesktop = useMediaQuery({ query: DESKTOP_QUERY });
  const isTablet = useMediaQuery({ query: TABLET_QUERY });
  const isMobile = useMediaQuery({ query: MOBILE_QUERY });

  return { isDesktop, isTablet, isMobile };
};

export default useResponsive;
