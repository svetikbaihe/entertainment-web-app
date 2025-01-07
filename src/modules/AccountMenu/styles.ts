import { Theme } from "@mui/material/styles";

export const accountMenuWrapper = {
  "&.MuiMenu-root": { top: "7px", left: "3px" },
};

export const accountMenu = (theme: Theme) => ({
  backgroundColor: "#5A698F",
  position: "absolute" as const,
  borderRadius: "8px",
  overflow: "visible" as const,
  maxWidth: "3rem",
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute" as const,
    top: 0,
    right: 18,
    width: "0.625rem",
    height: "0.625rem",
    backgroundColor: "#5A698F",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "7.3rem",
    "&.MuiMenu-paper::before": {
      right: 22,
    },
  },
  [theme.breakpoints.up("lg")]: {
    "&.MuiMenu-paper::before": {
      right: 50,
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
