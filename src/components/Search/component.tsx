import type React from "react";

import Input from "@elements/Input";
import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { theme } from "@theme/theme";

const InputSearch: React.FC = () => {
  return (
    <Input
      fullWidth
      type="text"
      placeholder="Search for movies or TV series"
      startAdornment={
        <InputAdornment position="start" sx={{ marginRight: 0 }}>
          <Search
            sx={{
              fill: theme.palette.text.primary,
              fontSize: "1.8rem",
              [theme.breakpoints.up("sm")]: {
                fontSize: "2rem",
              },
            }}
          />
        </InputAdornment>
      }
      sx={{
        "&:before": {
          borderColor: "transparent",
        },
        "&:hover:not(.Mui-disabled, .Mui-error):before": {
          borderBottom: "1px solid #5A698F",
        },
        "&:after": {
          borderBottom: "1px solid #5A698F",
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: theme.typography.h2,
          "& .MuiInput-input": {
            paddingLeft: "1.4rem",
          },
        },
      }}
    />
  );
};

export default InputSearch;
