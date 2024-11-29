import type React from "react";

import { LAYOUT, LayoutKeys } from "@constants/layouts";
import { Outlet } from "react-router-dom";

const BaseLayout: React.FC = () => {
  return (
    <>
      <div>this is a base layout</div>
      <Outlet />
    </>
  );
};

BaseLayout.displayName = LAYOUT[LayoutKeys.BASE_LAYOUT].DISPLAY_NAME;

export default BaseLayout;
