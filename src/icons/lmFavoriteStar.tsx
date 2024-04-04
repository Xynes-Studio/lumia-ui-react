"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmFavoriteStar: React.FC<AssetProps> = ({
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
    <path d="M11.3687 6.05371C11.51 6.29631 11.7468 6.46834 12.0212 6.52775L16.6209 7.52381L13.4851 11.0333C13.2981 11.2427 13.2076 11.521 13.2359 11.8003L13.71 16.4827L9.40326 14.5849C9.14634 14.4717 8.85367 14.4717 8.59676 14.5849L4.29002 16.4827L4.76411 11.8003C4.79239 11.521 4.70195 11.2427 4.51489 11.0333L1.37908 7.52381L5.97883 6.52775C6.25322 6.46834 6.49 6.29631 6.6313 6.05371L9.00001 1.98689L11.3687 6.05371Z" stroke={color} stroke-width="2" stroke-linejoin="round"/>

    </svg>
  );
};