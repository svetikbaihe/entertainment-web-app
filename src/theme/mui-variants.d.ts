/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ButtonPropsVariantOverrides } from "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    icon: true;
  }
}
