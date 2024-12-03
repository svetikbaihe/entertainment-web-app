import type React from "react";

import { LAYOUT, LayoutKeys } from "@constants/layouts";
import { Box } from "@mui/material";
import { theme } from "@theme/theme";
import { Outlet } from "react-router-dom";

const BaseLayout: React.FC = () => {
  return (
    <Box
      sx={{
        [theme.breakpoints.up("sm")]: {
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      }}
    >
      {/* <div>this is a base layout</div> */}
      <Outlet />
    </Box>
  );
};

BaseLayout.displayName = LAYOUT[LayoutKeys.BASE_LAYOUT].DISPLAY_NAME;

export default BaseLayout;
