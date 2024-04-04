"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmHeartFavoriteSave: React.FC<AssetProps> = ({
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
    <path d="M8.28149 2.29073L9 3.033L9.71851 2.29073C11.3844 0.569756 14.0714 0.569756 15.7373 2.29073C17.4209 4.02996 17.4209 6.86286 15.7373 8.60209L9 15.5622L2.26267 8.60209C0.57911 6.86286 0.57911 4.02996 2.26267 2.29073C3.92856 0.569756 6.6156 0.569756 8.28149 2.29073Z" stroke={color} stroke-width="2"/>

    </svg>
  );
};