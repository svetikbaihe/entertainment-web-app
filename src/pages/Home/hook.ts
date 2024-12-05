import { DESKTOP_QUERY } from "@constants/app";
import { useMediaQuery } from "react-responsive";

const useContainer = () => {
  const isDesktop = useMediaQuery({ query: DESKTOP_QUERY });

  return { isDesktop };
};

export default useContainer;
