export const mediaCard = {
  position: "relative",
  m: 0,
};

export const mediaInfoUl = {
  display: "inline-flex",
  listStyle: "none",
  alignItems: "center",
  p: 0,
  m: 0,
  "& li": {
    marginRight: "0.375rem",
    display: "flex",
    alignItems: "center",
    lineHeight: 0,
  },
  "& li:not(:first-of-type)::before": {
    content: "'•'",
    marginRight: "0.375rem",
    display: "inline-block",
    verticalAlign: "middle",
  },
};

export const mediaInfoLi = (isTablet: boolean) => ({
  ...(!isTablet && { fontSize: "0.75rem" }),
});

export const categoryIcon = {
  marginRight: "0.375rem",
  fontSize: "1rem",
};

export const mediaCardTitle = {
  fontWeight: "500",
  lineHeight: 0.9,
};
