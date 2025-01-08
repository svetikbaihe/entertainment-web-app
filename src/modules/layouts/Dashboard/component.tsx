import type React from "react";

import { LAYOUT, LayoutKeys } from "@constants/layouts";
import useResponsive from "@hooks/useMediaQuery";
import ProtectedRoute from "@modules/ProtectedRoute";
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
      <Sidebar />
      <Outlet />
    </Box>
  );
};

DashboardLayout.displayName = LAYOUT[LayoutKeys.DASHBOARD_LAYOUT].DISPLAY_NAME;

const ProtectedDashboardLayout = () => {
  return <ProtectedRoute Component={<DashboardLayout />} isLayout />;
};

export default ProtectedDashboardLayout;
