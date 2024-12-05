import type React from "react";

import { Bookmark } from "@mui/icons-material";
import { Button } from "@mui/material";

import { bookMarkIcon, bookMarkButton } from "./styles";
import type { BookmarkIconProps } from "./types";

const BookmarkIcon: React.FC<BookmarkIconProps> = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<Bookmark sx={[bookMarkIcon]} />}
      sx={bookMarkButton}
    />
  );
};

export default BookmarkIcon;
