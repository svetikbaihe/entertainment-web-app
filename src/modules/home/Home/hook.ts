import { useDispatch, useSelector } from "react-redux";
import { homeActions, homeSelectors } from "@modules/home/Home";
import debounce from "lodash.debounce";
import { useCallback } from "react";

const useContainer = () => {
  const searchedValue = useSelector(homeSelectors.searchValueSelector);

  const dispatch = useDispatch();

  const debouncedSetSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(homeActions.setSearchValue(value));
    }, 500),
    [dispatch]
  );

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    debouncedSetSearchValue(e.target.value);
  };

  return { searchedValue, handleSearchChange };
};

export default useContainer;
