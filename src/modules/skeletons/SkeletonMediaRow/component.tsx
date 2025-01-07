import type React from "react";

import SkeletonElement from "@elements/SkeletonElement";
import { Box } from "@mui/material";
import { skeletonBookmarkWrapper } from "@styles/modules";

import { skeletonsRowWrapper } from "./styles";

const SkeletonMediaRow: React.FC = () => {
  return (
    <Box sx={skeletonsRowWrapper}>
      <Box sx={skeletonBookmarkWrapper}>
        <SkeletonElement variant="circular" type="bookmark" />
      </Box>
      <Box>
        <SkeletonElement variant="text" type="textSubTitleTrending" />
        <SkeletonElement variant="text" type="textTitleTrending" />
      </Box>
    </Box>
  );
};

export default SkeletonMediaRow;
