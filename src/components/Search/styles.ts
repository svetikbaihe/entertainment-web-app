import { Theme } from "@mui/material/styles";
import { theme } from "@theme/theme";

export const inputSearchIcon = {
  fill: theme.palette.text.primary,
  fontSize: "1.8rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
};

export const inputSearch = (theme: Theme) => ({
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
    fontSize: theme.typography.h2.fontSize,
    "& .MuiInput-input": {
      paddingLeft: "1.4rem",
    },
  },
});

export const inputAdornment = {
  marginRight: 0,
};
