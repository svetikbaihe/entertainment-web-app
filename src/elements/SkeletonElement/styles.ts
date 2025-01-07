import { SxProps, Theme } from "@mui/material";
import { theme } from "@theme/theme";

export const variantStyles: Record<string, SxProps<Theme>> = {
  textTitleTrending: {
    fontSize: "1.4rem",
    maxWidth: "40%",
    backgroundColor: "#6f6f70",
  },
  textSubTitleTrending: {
    fontSize: "0.9rem",
    maxWidth: "55%",
    backgroundColor: "#6f6f70",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "40%",
    },
  },
  textTitleNotTrending: {
    fontSize: "1.2rem",
    maxWidth: "7rem",
    backgroundColor: "#6f6f70",
  },
  textSubTitleNotTrending: {
    fontSize: "0.9rem",
    maxWidth: "9.5rem",
    backgroundColor: "#6f6f70",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "7rem",
    },
  },
  bookmark: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    backgroundColor: "#6f6f70",
  },
};
