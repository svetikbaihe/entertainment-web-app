export const trendingTitle = (isTablet: boolean) => ({
  marginBottom: "1rem",
  ...(!isTablet && { fontSize: "1.25rem", fontWeight: 300 }),
});

export const trendingMediaSection = (isTablet: boolean) => ({
  display: "flex",
  gap: "1rem",
  ...(isTablet && {
    gap: "2rem",
  }),
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    appearance: "none",
    width: 0,
  },
});
