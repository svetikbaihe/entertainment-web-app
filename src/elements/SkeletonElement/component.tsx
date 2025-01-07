import type React from "react";
import type { SkeletonElementProps } from "./types";
import { Skeleton } from "@mui/material";
import { variantStyles } from "./styles";

const SkeletonElement: React.FC<SkeletonElementProps> = ({ variant, type }) => {
  return <Skeleton variant={variant} sx={variantStyles[type] || {}}></Skeleton>;
};

export default SkeletonElement;
