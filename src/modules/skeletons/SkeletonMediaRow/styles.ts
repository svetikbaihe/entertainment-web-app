import { theme } from "@theme/theme";

export const skeletonsRowWrapper = {
  backgroundColor: "#2a3044",
  minWidth: "15rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "3rem",
  flexDirection: "column",
  p: "1.06rem",
  borderRadius: "8px",
  [theme.breakpoints.up("sm")]: {
    minWidth: "29.3rem",
    height: "14rem",
  },
};
