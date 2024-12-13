export const recommendedTitle = (isTablet: boolean) => ({
  marginBottom: "1.3rem",
  ...(!isTablet && { fontSize: "20px", fontWeight: 300 }),
});

export const recommendedMediaContainer = (
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean
) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  ...(isMobile && { gridTemplateColumns: "repeat(2, auto)" }),
  ...(isTablet && { gridTemplateColumns: "repeat(3, auto)" }),
  ...(isDesktop && { gridTemplateColumns: "repeat(4, auto)", gap: "2rem" }),
});
