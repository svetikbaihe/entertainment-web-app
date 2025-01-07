import type React from "react";

import { Box, Button, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { additionalTextLinkWrapper, form } from "./styles";
import type { FormProps } from "./types";

const Form: React.FC<FormProps> = ({
  title,
  children,
  additionalText,
  linkText,
  buttonText,
  action,
  method,
  linkDestination,
  onClick,
  endComponent
}) => {
  return (
    <Box
      component="form"
      action={action}
      method={method}
      autoComplete="off"
      sx={form}
    >
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h2">{title}</Typography>
        {endComponent}
      </Box>
      {children}
      <Button variant="contained" type="submit" onClick={onClick}>
        {buttonText}
      </Button>
      <Box sx={additionalTextLinkWrapper}>
        <Typography variant="overline">{additionalText}</Typography>
        <MuiLink
          component={RouterLink}
          to={linkDestination}
          variant="overline"
          underline="hover"
        >
          {linkText}
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Form;
