import type React from "react";

import SearchAndDiscover from "@modules/SearchAndDiscover";
import { pageWrapper } from "@styles/modules";

import BookmarkedSection from "../BookmarkedSection";

const BookmarkedMedia: React.FC = () => {
  return (
    <SearchAndDiscover
      searchPlaceholder={{ id: "bookmarked.inputSearch.placeholder" }}
      containerStyle={pageWrapper}
    >
      <BookmarkedSection />
    </SearchAndDiscover>
  );
};

export default BookmarkedMedia;
