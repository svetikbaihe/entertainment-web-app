import { Box, Typography } from "@mui/material";
import type React from "react";
import { recommendedTitle, recommendedMediaContainer } from "./styles";
import useContainer from "./hook";
import { v4 as uuid } from "uuid";
import MediaCard from "@modules/MediaCard";
import { FormattedMessage } from "react-intl";

const RecommendedSection: React.FC = () => {
  const { notTrendingData, isTablet, isDesktop, isMobile } = useContainer();

  return (
    <Box>
      <Typography variant="h2" sx={recommendedTitle(isTablet)}>
        <FormattedMessage id="recommended.title" />
      </Typography>

      <Box sx={recommendedMediaContainer(isMobile, isTablet, isDesktop)}>
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
            key={uuid()}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecommendedSection;
