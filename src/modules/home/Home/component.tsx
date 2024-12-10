import type React from "react";

import InputSearch from "@components/Search";
import { ROUTES, RoutesKeys } from "@constants/routes";
import TrendingSection from "@modules/home/Trending";
import { Box } from "@mui/material";

import useContainer from "./hook";
import { home } from "./styles";
import RecommendedSection from "@modules/home/Recommended";
import SearchResults from "../../SearchResults";
import useResponsive from "@hooks/useMediaQuery";

const Home: React.FC = () => {
  const { searchedValue, handleSearchChange } = useContainer();

  const {isDesktop} = useResponsive()

  return (
    <Box sx={home(isDesktop)}>
      <InputSearch
        placeholder={{ id: "home.inputSearch.placeholder" }}
        onChange={handleSearchChange}
      />

      {searchedValue.length === 0 && (
        <>
          <TrendingSection />

          <RecommendedSection />
        </>
      )}

      {searchedValue.length > 0 && <SearchResults isSearched searchedValue={searchedValue}/>}
    </Box>
  );
};

Home.displayName = ROUTES[RoutesKeys.HOME].DISPLAY_NAME;

export default Home;
