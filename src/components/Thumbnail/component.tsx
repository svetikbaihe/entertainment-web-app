import type React from "react";

import { TABLET_QUERY } from "@constants/app";
import { PlayCircle } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import {
  boxThumbnail,
  boxThumbnailMedia,
  thumbnailIcon,
  thumbnailButton,
} from "./styles";
import type { ThumbnailProps } from "./types";

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt }) => {
  const isTablet = useMediaQuery({ query: TABLET_QUERY });
  return (
    <Box sx={boxThumbnail(isTablet)}>
      <Box component="img" src={src} alt={alt} sx={boxThumbnailMedia} />

      <Button
        variant="text"
        startIcon={<PlayCircle sx={thumbnailIcon} />}
        sx={thumbnailButton}
      >
        <Typography variant="h4">Play</Typography>
      </Button>
    </Box>
  );
};

export default Thumbnail;
