import type React from "react";

import RecommendedSection from "@modules/home/Recommended";
import TrendingSection from "@modules/home/Trending";
import SearchAndDiscover from "@modules/SearchAndDiscover";
import { pageWrapper } from "@styles/modules";

const Home: React.FC = () => {
  return (
    <SearchAndDiscover
      searchPlaceholder={{ id: "home.inputSearch.placeholder" }}
      containerStyle={pageWrapper}
    >
      <TrendingSection />

      <RecommendedSection />
    </SearchAndDiscover>
  );
};

export default Home;
