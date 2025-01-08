import { PopperPlacementType } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { theme } from "@theme/theme";

export const avatar = {
  border: "1px solid #FFF",
  width: "1.5rem",
  height: "1.5rem",
  [theme.breakpoints.up("sm")]: {
    width: "2rem",
    height: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "2.5rem",
    height: "2.5rem",
  },
};

export const accountMenu = (theme: Theme, placement: PopperPlacementType) => ({
  backgroundColor: "#5A698F",
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: placement === "top" ? "100%" : 0,
    right: 20,
    width: "0.625rem",
    height: "0.625rem",
    backgroundColor: "#5A698F",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
  [theme.breakpoints.up("sm")]: {
    "&.MuiPaper-root::before": {
      right: 35,
    },
  },
  [theme.breakpoints.up("lg")]: {
    "&.MuiPaper-root::before": {
      right: 55,
    },
  },
});

export const menuItem = (isTablet: boolean) => ({
  px: "0.5rem",
  ...(isTablet && { pl: "0.5rem", pr: "0.875rem" }),
});

export const accountMenuIconWrapper = {
  display: "flex",
  justifyContent: "center",
};

export const accountMenuIcon = {
  color: "#FFF",
};
