export const mediaCard = {
  position: "relative",
  m: 0,
};

export const mediaInfoUl = (isOnThumbnail: boolean) => ({
  ...(isOnThumbnail && {
    position: "absolute",
    bottom: "24%",
    left: "6%",
    p: 0,
    m: 0,
  }),
  display: "inline-flex",
  listStyle: "none",
  alignItems: "center",
  "& li": {
    marginRight: "0.375rem",
    display: "flex",
    alignItems: "center",
  },
  "& li:not(:first-of-type)::before": {
    content: "'•'",
    marginRight: "0.375rem",
    display: "inline-block",
    verticalAlign: "middle",
  },
});

export const mediaInfoLi = (isTablet: boolean) => ({
  ...(!isTablet && { fontSize: "0.75rem" }),
});

export const categoryIcon = {
  marginRight: "0.375rem",
  fontSize: "1rem",
};

export const mediaCardTitle = (isOnThumbnail: boolean) => ({
  ...(isOnThumbnail && {
    position: "absolute",
    bottom: "8%",
    left: "6%",
  }),
  fontWeight: "500",
});
