export const boxThumbnail = (isTablet: boolean, isDesktop: boolean) => ({
  "&:hover": {
    cursor: "pointer",
  },
  "&:hover img": {
    backgroundColor: "#10141E",
    opacity: "50%",
  },
  "&:hover .MuiButton-iconText": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  marginRight: "1.875rem",
  display: "inline-block",
  position: "relative",
  borderRadius: "8px",
  margin: 0,
  minWidth: "10.25rem",
  minHeight: "6.875rem",
  ...(isTablet && {
    minWidth: "13.75rem",
    minHeight: "8.75rem",
  }),
  ...(isDesktop && {
    minWidth: "17.5rem",
    minHeight: "10.87rem",
  }),
});

export const boxThumbnailTrending = (isTablet: boolean) => ({
  width: "15rem",
  height: "8.75rem",
  ...(isTablet && {
    width: "29.37rem",
    height: "14.37rem",
  }),
});

export const boxThumbnailMedia = {
  borderRadius: "8px",
  width: "100%",
  height: "100%",
};

export const thumbnailIcon = {
  width: "30px",
  height: "30px",
};

export const thumbnailButton = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "none",
};
