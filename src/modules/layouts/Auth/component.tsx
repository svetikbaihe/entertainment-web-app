import type React from "react";

import { LAYOUT, LayoutKeys } from "@constants/layouts";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { authLayout, authLayoutLogo } from "./styles";

const AuthLayout: React.FC = () => {
  return (
    <Box sx={authLayout}>
      <Box
        component="img"
        src="/icons/logo.svg"
        alt="Logo"
        sx={authLayoutLogo}
      />
      <Outlet />
    </Box>
  );
};

AuthLayout.displayName = LAYOUT[LayoutKeys.AUTH_LAYOUT].DISPLAY_NAME;

export default AuthLayout;
