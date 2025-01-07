import type React from "react";

import SkeletonElement from "@elements/SkeletonElement";
import useResponsive from "@hooks/useMediaQuery";
import { Box } from "@mui/material";
import { skeletonBookmarkWrapper } from "@styles/modules";

import { skeletonsGridWrapper } from "./styles";

const SkeletonMediaGrid: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <Box sx={skeletonsGridWrapper({ isMobile, isTablet, isDesktop })}>
      <Box>
        <Box sx={skeletonBookmarkWrapper}>
          <SkeletonElement variant="circular" type="bookmark" />
        </Box>
      </Box>
      <Box>
        <SkeletonElement variant="text" type="textSubTitleNotTrending" />
        <SkeletonElement variant="text" type="textTitleNotTrending" />
      </Box>
    </Box>
  );
};

export default SkeletonMediaGrid;
