export const boxThumbnail = (isHovered: boolean) => ({
  ...(isHovered && { position: "relative" }),
  marginRight: "30px",
  display: "inline-block",
  minHeight: "6.875rem",
});

export const boxThumbnailMedia = (isHovered: boolean) => ({
  ...(isHovered && { opacity: "50%", backgroundColor: "#000" }),
  borderRadius: "8px",
});

export const thumbnailIcon = {
  width: "30px",
  height: "30px",
};

export const thumbnailButton = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
