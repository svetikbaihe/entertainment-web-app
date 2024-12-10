import type React from "react";
import useContainer from "./hook";
import { Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import MediaCard from "@modules/MediaCard";
import { v4 as uuid } from "uuid";
import { recommendedMediaContainer, recommendedTitle } from "./styles";
import { SearchResultsProps } from "./types";
import useResponsive from "@hooks/useMediaQuery";

const SearchResults: React.FC<SearchResultsProps> = ({
  isSearched,
  searchedValue,
}) => {
  const { matchedResult, quantity } = useContainer({ searchedValue });

  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <Box>
      <Typography variant="h2" sx={recommendedTitle(isTablet)}>
        <FormattedMessage
          id="searchResults.title"
          values={{ quantity, searchedValue }}
        />
      </Typography>

      <Box sx={recommendedMediaContainer(isMobile, isTablet, isDesktop)}>
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
            key={uuid()}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SearchResults;
