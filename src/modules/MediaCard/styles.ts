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
    marginRight: "6px",
    display: "flex",
    alignItems: "center",
  },
  "& li:not(:first-of-type)::before": {
    content: "'•'",
    marginRight: "6px",
    display: "inline-block",
    verticalAlign: "middle",
  },
});

export const mediaInfoLi = (isTablet: boolean) => ({
  ...(!isTablet && { fontSize: "12px" }),
});

export const categoryIcon = {
  marginRight: "6px",
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
