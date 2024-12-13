import type React from "react";

import { LAYOUT, LayoutKeys } from "@constants/layouts";
import useResponsive from "@hooks/useMediaQuery";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import useContainer from "./hook";
import Sidebar from "./Sidebar";
import { dashboard } from "./styles";

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
