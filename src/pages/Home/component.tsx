import type React from "react";

import InputSearch from "@components/Search";
import { ROUTES, RoutesKeys } from "@constants/routes";
import TrendingSection from "@modules/home/Trending";
import { Box } from "@mui/material";

import useContainer from "./hook";
import { home } from "./styles";
import RecommendedSection from "@modules/home/Recommended";

const Home: React.FC = () => {
  const { isDesktop } = useContainer();
  return (
    <Box sx={home(isDesktop)}>
      <InputSearch placeholder={{ id: "home.inputSearch.placeholder" }} />

      <TrendingSection />

      <RecommendedSection/>
    </Box>
  );
};

Home.displayName = ROUTES[RoutesKeys.HOME].DISPLAY_NAME;

export default Home;
