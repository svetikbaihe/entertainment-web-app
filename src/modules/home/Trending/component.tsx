import type React from "react";

import useResponsive from "@hooks/useMediaQuery";
import MediaCard from "@modules/MediaCard";
import { Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { v4 as uuid } from "uuid";

import useContainer from "./hook";
import { trendingTitle, trendingMediaSection } from "./styles";

const TrendingSection: React.FC = () => {
  const { trendingData } = useContainer();

  const { isTablet } = useResponsive();

  return (
    <Box>
      <Typography variant="h2" sx={trendingTitle(isTablet)}>
        <FormattedMessage id="trending.title" />
      </Typography>
      <Box sx={trendingMediaSection(isTablet)}>
        {trendingData?.map(item => (
          <MediaCard
            thumbnailSrc={
              isTablet
                ? item.thumbnail.trending.large
                : item.thumbnail.trending.small
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

export default TrendingSection;
