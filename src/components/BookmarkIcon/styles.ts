export const bookMarkIconActive = (isActive: boolean) => ({
  ...(isActive && {
    fill: "#FFFFFF",
  }),
});

export const bookMarkIcon = {
  fill: "transparent",
  stroke: "#FFF",
  strokeWidth: "2px",
};

export const bookMarkButton = {
  "& .MuiButton-startIcon": { margin: 0 },
  "&:hover .MuiButton-startIcon svg": { stroke: "#10141E" },
  position: "absolute",
  top: "10px",
  right: "9px",
};
