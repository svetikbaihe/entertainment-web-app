/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ButtonPropsVariantOverrides } from "@mui/material/Button";
import {
  TypographyVariants,
  TypographyVariantsOptions,
} from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    icon: true;
    iconText: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    errorText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    errorText?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    errorText: true;
  }
}
