import type React from "react";

import { LAYOUT, LayoutKeys } from "@constants/layouts";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { dashboard } from "./styles";
import useResponsive from "@hooks/useMediaQuery";
import useContainer from "./hook";

const DashboardLayout: React.FC = () => {
  useContainer();
  
  const { isDesktop } = useResponsive();

  return (
    <Box sx={dashboard(isDesktop)}>
      <Sidebar avatarSrc="/images/image-avatar.png" />
      <Outlet />
    </Box>
  );
};

DashboardLayout.displayName = LAYOUT[LayoutKeys.DASHBOARD_LAYOUT].DISPLAY_NAME;

export default DashboardLayout;
