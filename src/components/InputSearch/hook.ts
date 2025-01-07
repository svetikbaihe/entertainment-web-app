import { useIntl } from "react-intl";
import { InputSearchProps } from "./types";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";

const useContainer = ({
  search,
  onChange,
}: Pick<InputSearchProps, "search" | "onChange">) => {
  const intl = useIntl();

  const [value, setValue] = useState(search);

  const handleDebounce = debounce((value: string) => {
    onChange(value);
  }, 500);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      handleDebounce(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    setValue(search);
  }, [search]);

  return { handleChange, value, intl };
};

export default useContainer;
