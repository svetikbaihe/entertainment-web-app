import type React from "react";

import { Bookmark } from "@mui/icons-material";
import { Button } from "@mui/material";

import { bookMarkIcon, bookMarkButton } from "./styles";
import type { BookmarkIconProps } from "./types";

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ isActive = false }) => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<Bookmark sx={bookMarkIcon(isActive)} />}
      sx={bookMarkButton}
    />
  );
};

export default BookmarkIcon;
