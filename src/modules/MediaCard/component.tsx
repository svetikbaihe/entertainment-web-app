import type React from "react";

import BookmarkIcon from "@components/BookmarkIcon";
import Thumbnail from "@components/Thumbnail";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import TvIcon from "@mui/icons-material/Tv";
import { Box, Typography } from "@mui/material";

import {
  mediaCard,
  mediaInfoUl,
  mediaInfoLi,
  categoryIcon,
  mediaCardTitle,
} from "./styles";
import type { MediaCardProps } from "./types";
import useResponsive from "@hooks/useMediaQuery";

const MediaCard: React.FC<MediaCardProps> = ({
  textCategory,
  textRating,
  textTitle,
  textYear,
  thumbnailSrc,
  isOnThumbnail = false,
}) => {
  const { isTablet } = useResponsive();

  return (
    <Box sx={mediaCard}>
      <Box sx={{ position: "relative", maxWidth: "fit-content" }}>
        <Thumbnail
          src={thumbnailSrc}
          alt={textTitle}
          isOnThumbnail={isOnThumbnail}
        />

        <BookmarkIcon />
      </Box>

      <Box
        sx={[
          isOnThumbnail && { position: "absolute", top: "57%", left: "7%" },
          { display: "inline-flex", flexDirection: "column" },
        ]}
      >
        <Box component={"ul"} sx={mediaInfoUl}>
          <li>
            <Typography variant="overline" sx={mediaInfoLi(isTablet)}>
              {textYear}
            </Typography>
          </li>
          <li>
            {textCategory === "Movie" ? (
              <LocalMoviesRoundedIcon sx={categoryIcon} />
            ) : (
              <TvIcon sx={categoryIcon} />
            )}
            <Typography variant="overline" sx={mediaInfoLi(isTablet)}>
              {textCategory}
            </Typography>
          </li>
          <li>
            <Typography variant="overline" sx={mediaInfoLi(isTablet)}>
              {textRating}
            </Typography>
          </li>
        </Box>

        <Typography variant={isTablet ? "h4" : "overline"} sx={mediaCardTitle}>
          {textTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default MediaCard;
