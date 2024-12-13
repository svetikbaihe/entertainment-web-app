import type React from "react";

import useResponsive from "@hooks/useMediaQuery";
import MediaCard from "@modules/MediaCard";
import { Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { v4 as uuid } from "uuid";

import useContainer from "./hook";
import { mediaTitle, mediaContainer } from "@styles/modules";

const MoviesSection: React.FC = () => {
  const { moviesData } = useContainer();

  const { isTablet, isDesktop, isMobile } = useResponsive();

  return (
    <Box>
      <Typography variant="h2" sx={mediaTitle(isTablet)}>
        <FormattedMessage id="movies.title" />
      </Typography>

      <Box sx={mediaContainer(isMobile, isTablet, isDesktop)}>
        {moviesData?.map(item => (
          <MediaCard
            thumbnailSrc={
              isDesktop
                ? item.thumbnail.regular.large
                : isTablet
                  ? item.thumbnail.regular.medium
                  : item.thumbnail.regular.small
            }
            textTitle={item.title}
            textYear={item.year}
            textCategory={item.category}
            textRating={item.rating}
            isOnThumbnail={item.isTrending}
            key={uuid()}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MoviesSection;
