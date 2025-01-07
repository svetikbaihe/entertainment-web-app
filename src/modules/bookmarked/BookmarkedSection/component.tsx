import type React from "react";

import useResponsive from "@hooks/useMediaQuery";
import MediaCard from "@modules/MediaCard";
import SkeletonMediaGrid from "@modules/skeletons/SkeletonMediaGrid";
import { Box, Typography } from "@mui/material";
import { mediaTitle, mediaGrid } from "@styles/modules";
import { FormattedMessage } from "react-intl";

import useContainer from "./hook";

const BookmarkedSection: React.FC = () => {
  const { bookmarkedMovieData, bookmarkedTVSeriesData, skeletons, isLoading } =
    useContainer();

  const { isTablet, isDesktop, isMobile } = useResponsive();

  return (
    <>
      <Box>
        <Typography variant="h2" sx={mediaTitle(isTablet, isDesktop)}>
          <FormattedMessage id="bookmarked.movie.title" />
        </Typography>

        {isLoading ? (
          <Box sx={mediaGrid(isMobile, isTablet, isDesktop)}>
            {skeletons.map(n => (
              <SkeletonMediaGrid key={n} />
            ))}
          </Box>
        ) : (
          <Box sx={mediaGrid(isMobile, isTablet, isDesktop)}>
            {bookmarkedMovieData?.map(item => (
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
                key={item.id}
                isBookmarked={item.isBookmarked}
                id={item.id}
              />
            ))}
          </Box>
        )}
      </Box>

      <Box>
        <Typography variant="h2" sx={mediaTitle(isTablet, isDesktop)}>
          <FormattedMessage id="bookmarked.tv.title" />
        </Typography>

        {isLoading ? (
          <Box sx={mediaGrid(isMobile, isTablet, isDesktop)}>
            {skeletons.map(n => (
              <SkeletonMediaGrid key={n} />
            ))}
          </Box>
        ) : (
          <Box sx={mediaGrid(isMobile, isTablet, isDesktop)}>
            {bookmarkedTVSeriesData?.map(item => (
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
                key={item.id}
                isBookmarked={item.isBookmarked}
                id={item.id}
              />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default BookmarkedSection;