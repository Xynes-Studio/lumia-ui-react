"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPencilEdit: React.FC<AssetProps> = ({
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
    <path d="M12.1421 2.12132C12.5327 1.7308 13.1658 1.7308 13.5563 2.12132L16.3848 4.94975C16.7753 5.34027 16.7753 5.97344 16.3848 6.36396L7.6084 15.1403L1.59799 16.9081L3.36576 10.8977L12.1421 2.12132Z" stroke={color} stroke-width="2"/>

    </svg>
  );
};