import { localDataSelectors } from "@modules/layouts/Dashboard";
import { useSelector } from "react-redux";

import { SearchResultsProps } from "./types";

const useContainer = ({
  searchedValue,
}: Pick<SearchResultsProps, "searchedValue">) => {
  const data = useSelector(localDataSelectors.dataLocalSelector);

  const matchedResult = data?.filter(item =>
    item.title.toLowerCase().includes(searchedValue.toLowerCase())
  );

  return {
    matchedResult,
    quantity: matchedResult?.length,
  };
};

export default useContainer;
