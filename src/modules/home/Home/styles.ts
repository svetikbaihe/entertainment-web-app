export const home = (isDesktop: boolean) => ({
  mx: "1rem",
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  overflow: "hidden",
  ...(isDesktop && { marginLeft: "2.18rem", paddingTop: "1.68rem" }),
});
