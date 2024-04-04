"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmMapPaperFolded: React.FC<AssetProps> = ({
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
    <path d="M6 3.5L1 2V15L6 16.5M6 3.5L12 1M6 3.5V16.5M12 1L17 2.5V15.5L12 13.5M12 1V13.5M12 13.5L6 16.5" stroke={color} stroke-width="2" stroke-linejoin="round"/>

    </svg>
  );
};