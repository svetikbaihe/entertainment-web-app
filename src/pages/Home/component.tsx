import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import TrendingSection from "@modules/home/Trending";
import { Box } from "@mui/material";

import { home } from "./styles";

const Home: React.FC = () => {
  return (
    <Box sx={home}>
      <TrendingSection />
    </Box>
  );
};

Home.displayName = ROUTES[RoutesKeys.HOME].DISPLAY_NAME;

export default Home;
