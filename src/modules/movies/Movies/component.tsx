import type React from "react";

import MoviesSection from "@modules/movies/MoviesSection";
import SearchAndDiscover from "@modules/SearchAndDiscover";
import { pageWrapper } from "@styles/modules";

const Movies: React.FC = () => {
  return (
    <SearchAndDiscover
      searchPlaceholder={{ id: "movies.inputSearch.placeholder" }}
      containerStyle={pageWrapper}
    >
      <MoviesSection />
    </SearchAndDiscover>
  );
};

export default Movies;
