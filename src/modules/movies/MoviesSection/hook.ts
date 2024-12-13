import { localDataSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

const useContainer = () => {
  const data = useSelector(localDataSelectors.dataLocalSelector);

  const moviesData = data?.filter(item => item.category === "Movie");

  return { moviesData };
};

export default useContainer;
