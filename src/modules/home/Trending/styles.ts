export const trendingTitle = (isTablet: boolean) => ({
  marginBottom: "1rem",
  ...(!isTablet && { fontSize: "20px", fontWeight: 300 }),
});

export const trendingMediaSection = (isTablet: boolean) => ({
  display: "flex",
  gap: "1rem",
  ...(isTablet && {
    gap: "2rem",
  })
});
