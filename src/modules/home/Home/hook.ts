import { useCallback, useMemo } from "react";

import { homeActions, homeSelectors } from "@modules/home/Home";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";

const useContainer = () => {
  const searchedValue = useSelector(homeSelectors.searchValueSelector);

  const dispatch = useDispatch();

  const debouncedSetSearchValue = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(homeActions.setSearchValue(value));
      }, 500),
    [dispatch]
  );

  useCallback(() => {
    return () => {
      debouncedSetSearchValue.cancel();
    };
  }, [debouncedSetSearchValue]);

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    debouncedSetSearchValue(e.target.value);
  };

  return { searchedValue, handleSearchChange };
};

export default useContainer;
