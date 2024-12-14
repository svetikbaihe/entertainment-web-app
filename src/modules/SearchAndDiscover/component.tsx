import type React from "react";

import InputSearch from "@components/Search";
import useResponsive from "@hooks/useMediaQuery";
import SearchResults from "@modules/SearchResults";
import { Box } from "@mui/material";

import useContainer from "./hook";
import { SearchAndDiscoverProps } from "./types";

const SearchAndDiscover: React.FC<SearchAndDiscoverProps> = ({
  searchPlaceholder,
  children,
  containerStyle,
}) => {
  const { searchedValue, handleSearchChange } = useContainer();

  const { isDesktop, isTablet } = useResponsive();

  return (
    <Box sx={containerStyle({ isDesktop, isTablet })}>
      <InputSearch
        placeholder={searchPlaceholder}
        onChange={handleSearchChange}
      />

      {searchedValue.length === 0 && children}

      {searchedValue.length > 0 && (
        <SearchResults isSearched searchedValue={searchedValue} />
      )}
    </Box>
  );
};

export default SearchAndDiscover;
