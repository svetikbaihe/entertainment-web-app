import type React from "react";

import Input from "@elements/Input";
import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

import useContainer from "./hook";
import { inputSearchIcon, inputSearch, inputAdornment } from "./styles";
import { InputSearchProps } from "./types";

const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  onChange,
  search,
}) => {
  const { intl, value, handleChange } = useContainer({ search, onChange });

  return (
    <Input
      fullWidth
      type="text"
      placeholder={
        typeof placeholder === "string"
          ? placeholder
          : intl.formatMessage({
              id: placeholder.id,
            })
      }
      startAdornment={
        <InputAdornment position="start" sx={inputAdornment}>
          <Search sx={inputSearchIcon} />
        </InputAdornment>
      }
      sx={inputSearch}
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputSearch;
