/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ButtonPropsVariantOverrides } from "@mui/material/Button";
import type { BreakpointOverrides } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    icon: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    laptop: true;
  }
}
