import type React from "react";

import Input from "@elements/Input";
import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

import { inputSearchIcon, inputSearch, inputAdornment } from "./styles";
import { InputSearchProps } from "./types";

const InputSearch: React.FC<InputSearchProps> = ({ placeholder }) => {
  return (
    <Input
      fullWidth
      type="text"
      placeholder={placeholder}
      startAdornment={
        <InputAdornment position="start" sx={inputAdornment}>
          <Search sx={inputSearchIcon} />
        </InputAdornment>
      }
      sx={inputSearch}
    />
  );
};

export default InputSearch;
