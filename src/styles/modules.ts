export const mediaTitle = (isTablet: boolean) => ({
  marginBottom: "1.3rem",
  ...(!isTablet && { fontSize: "20px", fontWeight: 300 }),
});

export const mediaContainer = (
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

export const pageWrapper = ({
  isDesktop,
  isTablet,
}: {
  isDesktop: boolean;
  isTablet: boolean;
}) => ({
  mx: "1.56rem",
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  overflow: "hidden",
  ...(isTablet && {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
  }),
  ...(isDesktop && {
    marginLeft: "2.18rem",
    paddingTop: "1.68rem",
  }),
});