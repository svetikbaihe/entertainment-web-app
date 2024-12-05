export const boxThumbnail = (isTablet: boolean) => ({
  "&:hover": {
    cursor: "pointer",
  },
  "&:hover img": {
    backgroundColor: "#10141E",
    opacity: "50%",
  },
  "&:hover .MuiButton-text": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  marginRight: "1.875rem",
  display: "inline-block",
  minHeight: "6.875rem",
  position: "relative",
  borderRadius: "8px",
  margin: 0,
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
