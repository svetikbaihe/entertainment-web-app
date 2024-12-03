import { SxProps, Theme } from "@mui/material/styles";
import { theme } from "@theme/theme";

export const sidebar: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: theme.palette.background.paper,
  p: "1rem",
  [theme.breakpoints.up("sm")]: {
    mt: "1.43rem",
    borderRadius: "10px",
  },
  [theme.breakpoints.up("laptop")]: {
    flexDirection: "column",
    maxWidth: "6rem",
    height: "60rem",
    borderRadius: "20px",
    py: "2.126rem",
    left: 0,
  },
};

export const sidebarLogo = {
  width: "1.56rem",
  height: "1.25rem",
  [theme.breakpoints.up("sm")]: {
    width: "2rem",
    height: "1.6rem",
  },
  [theme.breakpoints.up("laptop")]: {
    marginBottom: "1.75rem",
  },
};

export const btnContainer = {
  display: "flex",
  gap: "1.4rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.up("laptop")]: {
    flexDirection: "column",
    flex: "1 1 auto",
  },
};

export const sidebarBtn = {
  ".MuiButton-startIcon svg": {
    fontSize: "1.37rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.68rem",
    },
  },
};

export const avatar = {
  border: "1px solid #FFF",
  width: "1.5rem",
  height: "1.5rem",
  [theme.breakpoints.up("sm")]: {
    width: "2rem",
    height: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "2.5rem",
    height: "2.5rem",
  },
};
