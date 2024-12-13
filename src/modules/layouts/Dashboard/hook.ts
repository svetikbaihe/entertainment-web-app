import { useGetLocalDataQuery } from "@state/rootQuery";

const useContainer = () => {
  useGetLocalDataQuery(null);
};

export default useContainer;
