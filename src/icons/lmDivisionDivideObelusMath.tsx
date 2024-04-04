"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmDivisionDivideObelusMath: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  const [width, height] = useIconSize(24, 24, size);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C9 3.10457 8.10457 4 7 4C5.89543 4 5 3.10457 5 2C5 0.895431 5.89543 0 7 0C8.10457 0 9 0.895431 9 2ZM0 8C0 7.44772 0.447715 7 1 7H7H13C13.5523 7 14 7.44772 14 8C14 8.55229 13.5523 9 13 9H7H1C0.447715 9 0 8.55229 0 8ZM7 16C8.10457 16 9 15.1046 9 14C9 12.8954 8.10457 12 7 12C5.89543 12 5 12.8954 5 14C5 15.1046 5.89543 16 7 16Z" fill={color}/>

    </svg>
  );
};