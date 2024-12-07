import { DESKTOP_QUERY, TABLET_QUERY } from "@constants/app";
import { useMediaQuery } from "react-responsive";

const useContainer = () => {
  const isTablet = useMediaQuery({ query: TABLET_QUERY });
  const isDesktop = useMediaQuery({ query: DESKTOP_QUERY });

  return { isTablet, isDesktop };
};

export default useContainer;
