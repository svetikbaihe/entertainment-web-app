import type React from "react";

import useResponsive from "@hooks/useMediaQuery";
import { Bookmark as BookmarkIcon } from "@mui/icons-material";
import { Button } from "@mui/material";

import { bookMarkIcon, bookMarkButton, bookMarkIconActive } from "./styles";
import type { BookmarkProps } from "./types";

const Bookmark: React.FC<BookmarkProps> = ({ isActive = false, onClick }) => {
  const { isTablet } = useResponsive();

  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={
        <BookmarkIcon sx={[bookMarkIcon, isActive && bookMarkIconActive]} />
      }
      sx={bookMarkButton(isTablet)}
      onClick={onClick}
    />
  );
};

export default Bookmark;
