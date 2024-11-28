import type React from "react";

import { PlayCircle } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

import {
  boxThumbnail,
  boxThumbnailMedia,
  thumbnailIcon,
  thumbnailButton,
} from "./styles";
import type { ThumbnailProps } from "./types";

const Thumbnail: React.FC<ThumbnailProps> = ({
  src,
  alt,
  isHovered = false,
  width,
  height,
}) => {
  return (
    <Box sx={boxThumbnail(isHovered)}>
      <Box
        component="img"
        src={src}
        alt={alt}
        width={width}
        height={height}
        sx={boxThumbnailMedia(isHovered)}
      />
      {isHovered && (
        <Button
          variant="text"
          startIcon={<PlayCircle sx={thumbnailIcon} />}
          sx={thumbnailButton}
        >
          <Typography variant="h4">Play</Typography>
        </Button>
      )}
    </Box>
  );
};

export default Thumbnail;
