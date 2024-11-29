import type React from "react";

import { LAYOUT, LayoutKeys } from "@constants/layouts";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <div>this is a dashboard layout</div>
      <Outlet />
    </>
  );
};

DashboardLayout.displayName = LAYOUT[LayoutKeys.DASHBOARD_LAYOUT].DISPLAY_NAME;

export default DashboardLayout;
