import { DESKTOP_QUERY } from "@constants/app";
import { useGetLocalDataQuery } from "@state/rootQuery";
import { useMediaQuery } from "react-responsive";

const useContainer = () => {
  useGetLocalDataQuery(null);

  const isDesktop = useMediaQuery({ query: DESKTOP_QUERY });

  return { isDesktop };
};

export default useContainer;
