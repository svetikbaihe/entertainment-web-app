export const dashboard = (isDesktop: boolean) => ({
  overflow: "auto",
  ...(isDesktop && { display: "flex" }),
});
