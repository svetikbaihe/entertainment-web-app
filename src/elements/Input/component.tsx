import type React from "react";

import { InputAdornment, Input as InputMui, Typography } from "@mui/material";

import type { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  error,
  type,
  placeholder,
  startAdornment,
  sx,
  value,
  onChange,
}) => {
  return (
    <>
      <InputMui
        error={error}
        sx={sx}
        placeholder={placeholder}
        fullWidth
        type={type}
        startAdornment={startAdornment}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            {error && (
              <Typography color="primary.main" variant="caption"/>
            )}
          </InputAdornment>
        }
        value={value}
      />
    </>
  );
};

export default Input;
