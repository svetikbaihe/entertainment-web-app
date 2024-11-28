import type React from "react";

import { Bookmark } from "@mui/icons-material";
import { Button } from "@mui/material";

import type { BookmarkIconProps } from "./types";

const BookmarkIcon: React.FC<BookmarkIconProps> = ({isActive}) => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={
        <Bookmark
          sx={{
            fill: "transparent",
            stroke: "#FFF",
            strokeWidth: "2px",
            ...(isActive && {
              fill: "#FFFFFF"
            })
          }}
        />
      }
      sx={{
        "& .MuiButton-startIcon": { margin: 0 },
        "&:hover .MuiButton-startIcon svg": { stroke: "#10141E" },
      }}
    />
  );
};

export default BookmarkIcon;
