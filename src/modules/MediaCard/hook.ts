import { TABLET_QUERY } from "@constants/app";
import { useMediaQuery } from "react-responsive";

const useContainer = () => {
  const isTablet = useMediaQuery({ query: TABLET_QUERY });

  return { isTablet };
};

export default useContainer;
