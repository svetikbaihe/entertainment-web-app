import type React from "react";

import { Skeleton } from "@mui/material";

import { variantStyles } from "./styles";
import type { SkeletonElementProps } from "./types";

const SkeletonElement: React.FC<SkeletonElementProps> = ({ variant, type }) => {
  return <Skeleton variant={variant} sx={variantStyles[type] || {}}></Skeleton>;
};

export default SkeletonElement;
