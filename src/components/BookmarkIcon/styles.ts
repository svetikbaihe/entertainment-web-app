export const bookMarkIcon = (isActive: boolean) => ({
  fill: "transparent",
  stroke: "#FFF",
  strokeWidth: "2px",
  ...(isActive && {
    fill: "#FFFFFF",
  }),
});

export const bookMarkButton = {
  "& .MuiButton-startIcon": { margin: 0 },
  "&:hover .MuiButton-startIcon svg": { stroke: "#10141E" },
};
