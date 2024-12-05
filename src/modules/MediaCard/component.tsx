import type React from "react";

import BookmarkIcon from "@components/BookmarkIcon";
import Thumbnail from "@components/Thumbnail";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import TvIcon from "@mui/icons-material/Tv";
import { Box, Typography } from "@mui/material";

import useContainer from "./hook";
import {
  mediaCard,
  mediaInfoUl,
  mediaInfoLi,
  categoryIcon,
  mediaCardTitle,
} from "./styles";
import type { MediaCardProps } from "./types";

const MediaCard: React.FC<MediaCardProps> = ({
  textCategory,
  textRating,
  textTitle,
  textYear,
  thumbnailSrc,
  isOnThumbnail = false,
}) => {
  const { isTablet } = useContainer();

  return (
    <Box sx={mediaCard}>
      <Thumbnail src={thumbnailSrc} alt={textTitle} />

      <BookmarkIcon />

      <Box component={"ul"} sx={mediaInfoUl(isOnThumbnail)}>
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

      <Typography
        variant={isTablet ? "h3" : "overline"}
        sx={mediaCardTitle(isOnThumbnail)}
      >
        {textTitle}
      </Typography>
    </Box>
  );
};

export default MediaCard;
