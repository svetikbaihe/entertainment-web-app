import type React from "react";

import { LAYOUT, LayoutKeys } from "@constants/layouts";
import { Outlet } from "react-router-dom";

import useContainer from "./hook";

const DashboardLayout: React.FC = () => {
  useContainer();

  return (
    <>
      <Outlet />
    </>
  );
};

DashboardLayout.displayName = LAYOUT[LayoutKeys.DASHBOARD_LAYOUT].DISPLAY_NAME;

export default DashboardLayout;
