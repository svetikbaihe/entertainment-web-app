import type React from "react";

import useResponsive from "@hooks/useMediaQuery";
import MediaCard from "@modules/MediaCard";
import { Box, Typography } from "@mui/material";
import { mediaTitle, mediaGrid } from "@styles/modules";
import { FormattedMessage } from "react-intl";

import useContainer from "./hook";
import SkeletonMediaGrid from "@modules/skeletons/SkeletonMediaGrid";

const RecommendedSection: React.FC = () => {
  const { notTrendingData, skeletons, isLoading } = useContainer();

  const { isTablet, isDesktop, isMobile } = useResponsive();

  return (
    <>
      <Typography variant="h2" sx={mediaTitle(isTablet, isDesktop)}>
        <FormattedMessage id="recommended.title" />
      </Typography>

      {isLoading ? (
        <Box sx={mediaGrid(isMobile, isTablet, isDesktop)}>
          {skeletons.map(n => (
            <SkeletonMediaGrid key={n} />
          ))}
        </Box>
      ) : (
        <Box sx={mediaGrid(isMobile, isTablet, isDesktop)}>
          {notTrendingData?.map(item => (
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

export default RecommendedSection;
