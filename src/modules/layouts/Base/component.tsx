import type React from "react";

import { LAYOUT, LayoutKeys } from "@constants/layouts";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { baseLayout } from "./styles";

const BaseLayout: React.FC = () => {
  return (
    <Box sx={baseLayout}>
      <Outlet />
    </Box>
  );
};

BaseLayout.displayName = LAYOUT[LayoutKeys.BASE_LAYOUT].DISPLAY_NAME;

export default BaseLayout;
