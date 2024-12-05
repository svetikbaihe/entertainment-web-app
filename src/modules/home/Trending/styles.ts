export const trendingTitle = (isTablet: boolean) => ({
  marginBottom: "1rem",
  ...(!isTablet && { fontSize: "20px", fontWeight: 300 }),
});

export const trendingMediaSection = {
  display: "flex",
  gap: "1rem",
  overflowX: "scroll",
};
