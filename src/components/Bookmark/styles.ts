export const bookMarkIconActive = {
  fill: "#FFFFFF",
};

export const bookMarkIcon = {
  fill: "transparent",
  stroke: "#FFF",
  strokeWidth: "2px",
};

export const bookMarkButton = (isTablet: boolean) => ({
  "& .MuiButton-startIcon": { margin: 0 },
  "&:hover .MuiButton-startIcon svg": { stroke: "#10141E" },
  position: "absolute",
  top: "7px",
  right: "9px",
  ...(isTablet && {
    top: "17px",
    right: "17px",
  }),
});
