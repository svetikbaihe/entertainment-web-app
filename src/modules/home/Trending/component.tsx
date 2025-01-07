import type React from "react";

import useResponsive from "@hooks/useMediaQuery";
import MediaCard from "@modules/MediaCard";
import SkeletonMediaRow from "@modules/skeletons/SkeletonMediaRow";
import { Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import useContainer from "./hook";
import { trendingTitle, trendingMediaSection } from "./styles";

const TrendingSection: React.FC = () => {
  const { trendingData, skeletons, isLoading } = useContainer();

  const { isTablet } = useResponsive();

  return (
    <>
      <Typography variant="h2" sx={trendingTitle(isTablet)}>
        <FormattedMessage id="trending.title" />
      </Typography>
      {isLoading ? (
        <Box sx={trendingMediaSection(isTablet)}>
          {skeletons?.map(n => <SkeletonMediaRow key={n} />)}
        </Box>
      ) : (
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
              key={item.id}
              id={item.id}
              isBookmarked={item.isBookmarked}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default TrendingSection;
