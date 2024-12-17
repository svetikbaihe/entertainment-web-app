import type React from "react";

import useResponsive from "@hooks/useMediaQuery";
import MediaCard from "@modules/MediaCard";
import { Box, Typography } from "@mui/material";
import { mediaGrid, mediaTitle } from "@styles/modules";
import { FormattedMessage } from "react-intl";

import useContainer from "./hook";
import { SearchResultsProps } from "./types";

const SearchResults: React.FC<SearchResultsProps> = ({
  isSearched,
  searchedValue,
}) => {
  const { matchedResult, quantity } = useContainer({ searchedValue });

  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <>
      <Typography variant="h2" sx={mediaTitle(isTablet, isDesktop)}>
        <FormattedMessage
          id="searchResults.title"
          values={{ quantity, searchedValue }}
        />
      </Typography>

      <Box sx={mediaGrid(isMobile, isTablet, isDesktop)}>
        {matchedResult?.map(item => (
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
            isOnThumbnail={!isSearched && item.isTrending}
            key={item.id}
            id={item.id}
            isBookmarked={item.isBookmarked}
          />
        ))}
      </Box>
    </>
  );
};

export default SearchResults;
