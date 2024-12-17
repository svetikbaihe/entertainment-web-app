import type React from "react";

import SearchAndDiscover from "@modules/SearchAndDiscover";
import { pageWrapper } from "@styles/modules";

import TVSeriesSection from "../TVSerieSection";

const TVSeries: React.FC = () => {
  return (
    <SearchAndDiscover
      searchPlaceholder={{ id: "tvSeries.inputSearch.placeholder" }}
      containerStyle={pageWrapper}
    >
      <TVSeriesSection />
    </SearchAndDiscover>
  );
};

export default TVSeries;
