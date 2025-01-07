export const skeletonsGridWrapper = ({
  isMobile,
  isTablet,
  isDesktop,
}: {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}) => ({
  backgroundColor: "#2a3044",
  width: "16.8rem",
  height: "11.3rem",
  minWidth: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  p: "0.625rem",
  borderRadius: "8px",
  ...(isMobile && {
    width: "10.25rem",
    minHeight: "10.8rem",
  }),
  ...(isTablet && {
    width: "14.25rem",
    minHeight: "12rem",
  }),
  ...(isDesktop && {
    width: "18.68rem",
    height: "13.8rem",
  }),
});
