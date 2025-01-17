import type React from "react";

import useResponsive from "@hooks/useMediaQuery";
import { PlayCircle } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

import {
  boxThumbnail,
  boxThumbnailMedia,
  thumbnailIcon,
  thumbnailButton,
  boxThumbnailTrending,
} from "./styles";
import type { ThumbnailProps } from "./types";

const Thumbnail: React.FC<ThumbnailProps> = ({
  src,
  alt,
  isOnThumbnail = false,
}) => {
  const { isDesktop, isTablet } = useResponsive();

  return (
    <Box
      sx={[
        boxThumbnail(isTablet, isDesktop),
        isOnThumbnail && boxThumbnailTrending(isTablet),
      ]}
    >
      <Box component="img" src={src} alt={alt} sx={boxThumbnailMedia} />

      <Button
        variant="iconText"
        startIcon={<PlayCircle sx={thumbnailIcon} />}
        sx={thumbnailButton}
      >
        <Typography variant="h5">Play</Typography>
      </Button>
    </Box>
  );
};

export default Thumbnail;
